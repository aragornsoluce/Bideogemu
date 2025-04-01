const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialiser la base de données SQLite
const db = new sqlite3.Database('./database.db');

// Créer la table des utilisateurs
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
`);
// Ajouter cette commande pour créer la table `products`
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    popularity INTEGER DEFAULT 0,
    discount INTEGER DEFAULT 0,
    image TEXT
  );
`);

// Route pour l'inscription
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Nom d’utilisateur et mot de passe requis' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], 
        function (err) {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de l’enregistrement' });
        }
        res.status(200).json({ message: 'Utilisateur enregistré avec succès' });
    });
});

// Route de connexion avec gestion des rôles
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simuler un admin
  if (username === "Paul" && password === "PaulT92") {
    return res.status(200).json({ message: "Connexion réussie", role: "admin" });
  }

  // Simuler un utilisateur standard
  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], (err, user) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    if (!user) return res.status(400).json({ error: "Utilisateur non trouvé" });

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }

    res.status(200).json({ message: "Connexion réussie", role: "user" });
  });
});

// pour ajouter un produit
app.post('/products', (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Nom et prix du produit requis' });
  }

  const query = `INSERT INTO products (name, price, image) VALUES (?, ?, ?)`;
  db.run(query, [name, price, image || null], function (err) {
    if (err) {
      return res.status(500).json({ error: 'Erreur lors de l\'ajout du produit' });
    }
    res.status(200).json({ message: 'Produit ajouté avec succès', productId: this.lastID });
  });
});

// Pour récupérer un produit
// Route pour récupérer tous les produits
app.get('/products', (req, res) => {
  const query = `SELECT * FROM products`;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la récupération des produits" });
    }
    res.status(200).json(rows);
  });
});

app.get("/products/popular", (req, res) => {
  const query = "SELECT * FROM products ORDER BY popularity DESC LIMIT 10"; // Supposons une colonne 'popularity'
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits populaires :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des produits populaires" });
    }
    res.json(rows);
  });
});
app.get("/products/special-offers", (req, res) => {
  const query = "SELECT * FROM products WHERE discount > 0 ORDER BY discount DESC LIMIT 10"; // Supposons une colonne 'discount'
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des offres spéciales :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération des offres spéciales" });
    }
    res.json(rows);
  });
});


// Route pour supprimer un produit
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM products WHERE id = ?`;
  db.run(query, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la suppression du produit" });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: "Produit non trouvé" });
    }

    res.status(200).json({ message: "Produit supprimé avec succès" });
  });
});


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
