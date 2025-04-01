<template>

    <body>
    
        <header>
          <div class="site-header">
            <a href="/" class="logo">
              <img src="@/assets/images/logo.png" alt="Logo du site" class="site-logo" />
              <span>Bideogēmu</span>
          </a>
        </div>
        <div class="search-bar">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Rechercher des produits..." 
            @keyup.enter="search"
          />
          <button @click="search">Rechercher</button>
        </div>
        </header>
            <!-- Menu sous la recherche -->
            <div class="menu-bar">
          <a href="#" id="categories-link">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png" alt="Catégories" />
            Parcourir les catégories
          </a>
          <a href="/help">
            <img src="https://cdn-icons-png.flaticon.com/512/786/786407.png" alt="Aide" />
            Aide
          </a>
            <!-- Affiche uniquement si l'utilisateur n'est pas connecté -->
            <a v-if="!isLoggedIn" href="/auth">
              <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="Se connecter" />
              Se connecter
            </a>
            <!-- Affiche uniquement si l'utilisateur est connecté -->
            <a v-else href="/user-dashboard">
            <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="Mon compte" />
            Mon compte
          </a>
            <a href="/cart">
              <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Panier" />
              Panier
            </a>
          </div>
    
        <!-- Menu déroulant des catégories -->
        <div id="categories-menu" class="dropdown-menu">
          <a href="/sitepartenaire">Sites Partenaires</a>
          <a href="/products" id="games-category">
            Jeux vidéo, Console
          </a>
          <a href="#">Téléphonie, Tablette</a>
          <a href="#">Informatique, Logiciel</a>
          <a href="#">TV, Image et Son</a>
        </div>
      </body>  
      </template>
    
    <script>
    export default {
      name: "Header",
      data() {
        return {
          searchQuery: "", // Texte saisi dans la barre de recherche
          isLoggedIn: false, // Indique si l'utilisateur est connecté
        };
      },
      methods: {
        search() {
          if (this.searchQuery.trim() === "") {
            alert("Veuillez entrer un terme de recherche.");
            return;
          }
          // Redirection vers une page de résultats avec la recherche comme paramètre
          this.$router.push({ path: "/search", query: { q: this.searchQuery } });
        },
        checkLoginStatus() {
          // Vérifie si un utilisateur est connecté via localStorage
          const user = localStorage.getItem("user");
          this.isLoggedIn = !!user; // Convertir en booléen
        },
      },
      mounted() {
        this.checkLoginStatus(); // Vérifie le statut au chargement du composant
      },
    };
    </script>
    
    <style src="@/assets/styles/home_css.css">
    
    .search-bar {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .search-bar input {
      width: 300px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .search-bar button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .search-bar button:hover {
      background-color: #45a049;
    }
    
    </style>
      
      