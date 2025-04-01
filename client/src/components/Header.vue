<template>
  <body>
  
      <header>
        <div class="site-header">
          <a href="/" class="logo">
            <img src="@/assets/images/logo.png" alt="Site Logo" class="site-logo" />
            <span>Bideogēmu</span>
        </a>
      </div>
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search for products..." 
          @keyup.enter="search"
        />
        <button @click="search">Search</button>
      </div>
      </header>
          <!-- Menu under the search -->
          <div class="menu-bar">
        <a href="#" id="categories-link">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png" alt="Categories" />
          Browse Categories
        </a>
        <a href="/help">
          <img src="https://cdn-icons-png.flaticon.com/512/786/786407.png" alt="Help" />
          Help
        </a>
          <!-- Display only if the user is not logged in -->
          <a v-if="!isLoggedIn" href="/auth">
            <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="Log In" />
            Log In
          </a>
          <!-- Display only if the user is logged in -->
          <a v-else href="/user-dashboard">
          <img src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="My Account" />
          My Account
        </a>
          <a href="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart" />
            Cart
          </a>
        </div>
  
      <!-- Dropdown menu for categories -->
      <div id="categories-menu" class="dropdown-menu">
        <a href="/sitepartenaire">Partner Sites</a>
        <a href="/products" id="games-category">
          Video Games, Console
        </a>
        <a href="#">Telephony, Tablet</a>
        <a href="#">Computing, Software</a>
        <a href="#">TV, Audio and Visual</a>
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
  
  