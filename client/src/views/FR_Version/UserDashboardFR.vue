<template>
  <div>
    <Header />
    <main class="dashboard">
      <section class="welcome">
        <h1>Bienvenue, {{ username }}</h1>
        <p>Merci de vous être connecter. Voici un aperçu de votre activité récente :</p>
        <button class="logout-button" @click="logout">Déconnexion</button>
      </section>

      <section v-if="purchaseHistory.length > 0" class="history">
        <h2>Historique d'Achats</h2>
        <ul>
          <li v-for="(item, index) in purchaseHistory" :key="index">
            <div class="item-details">
              <img :src="item.image || 'placeholder.jpg'" alt="Image du produit" />
              <div>
                <p><strong>{{ item.name }}</strong></p>
                <p>Prix : {{ item.price }} €</p>
                <p>Acheté le : {{ item.date }}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section v-else>
        <p>Vous n'avez encore effectué aucun achat.</p>
      </section>

      <section class="suggestions">
        <h2>Produits Recommandés</h2>
        <div class="product-grid">
          <div v-for="product in recommendedProducts" :key="product.id" class="product-item">
            <img :src="product.image || 'placeholder.jpg'" alt="Image du produit" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }} €</p>
            <button @click="addToCart(product)">Ajouter au Panier</button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "UserDashboard",
  components: { Header, Footer },
  data() {
    return {
      username: "", // Le nom de l'utilisateur sera défini dynamiquement
      purchaseHistory: [], // Historique d'achats
      recommendedProducts: [], // Produits recommandés
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user"); // Supprime les informations de l'utilisateur
      this.$router.push("/"); // Redirige vers la page d'accueil
    },
    fetchUsername() {
      // Récupère le nom d'utilisateur depuis localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      this.username = user ? user.username : "Utilisateur";
    },
    async fetchPurchaseHistory() {
      // Simuler l'historique d'achats
      this.purchaseHistory = [
        {
          name: "Produit 1",
          price: 49.99,
          image: "https://via.placeholder.com/100",
          date: "2024-12-01",
        },
        {
          name: "Produit 2",
          price: 19.99,
          image: "https://via.placeholder.com/100",
          date: "2024-11-28",
        },
      ];
    },
    async fetchRecommendedProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        if (response.ok) {
          this.recommendedProducts = data.slice(0, 4); // Afficher 4 produits aléatoires
        }
      } catch (error) {
        console.error("Erreur lors du chargement des produits recommandés.");
      }
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} a été ajouté au panier.`);
    },
  },
  mounted() {
    this.fetchUsername(); // Charge le nom d'utilisateur connecté
    this.fetchPurchaseHistory();
    this.fetchRecommendedProducts();
  },
};
</script>

<style scoped>
/* Styles généraux */
.dashboard {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* Section Bienvenue */
.welcome h1 {
  font-size: 28px;
  color: #333;
}

.welcome p {
  font-size: 16px;
  color: #555;
}

/* Historique d'Achats */
.history ul {
  list-style: none;
  padding: 0;
}

.history li {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.history .item-details {
  display: flex;
  align-items: center;
  gap: 10px;
}

.history .item-details img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
}

/* Produits Recommandés */
.suggestions .product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.suggestions .product-item {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.suggestions .product-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.suggestions .product-item button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.suggestions .product-item button:hover {
  background-color: #45a049;
}
.logout-button {
  padding: 10px 20px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
