<template>
    <div>
      <Header />
      <main>
        <h1>Résultats de la Recherche</h1>
        <section v-if="filteredProducts.length > 0" class="product-grid">
          <div v-for="product in filteredProducts" :key="product.id" class="product-item">
            <img :src="product.image || 'placeholder.jpg'" alt="Image du produit" />
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }} €</p>
            <button @click="addToCart(product)">Ajouter au Panier</button>
          </div>
        </section>
        <p v-else>Aucun produit trouvé pour "{{ searchQuery }}"</p>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";
  
  export default {
    name: "SearchResults",
    components: { Header, Footer },
    data() {
      return {
        searchQuery: "",
        allProducts: [], // Tous les produits
        filteredProducts: [], // Produits correspondant à la recherche
      };
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await fetch("http://localhost:3000/products");
          const data = await response.json();
          if (response.ok) {
            this.allProducts = data;
            this.filteredProducts = this.filterProducts(); // Filtrer les produits
          }
        } catch (error) {
          console.error("Erreur lors du chargement des produits");
        }
      },
      filterProducts() {
        const query = this.searchQuery.toLowerCase();
        return this.allProducts.filter((product) =>
          product.name.toLowerCase().includes(query)
        );
      },
      addToCart(product) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} a été ajouté au panier.`);
      },
    },
    mounted() {
      this.searchQuery = this.$route.query.q || "";
      this.fetchProducts();
    },
    watch: {
      "$route.query.q"(newQuery) {
        this.searchQuery = newQuery || "";
        this.filteredProducts = this.filterProducts();
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour la page de résultats */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .product-item {
    text-align: center;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .product-item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .product-item h2 {
    font-size: 18px;
    margin: 10px 0;
  }
  
  .product-item p {
    font-size: 16px;
    color: #4CAF50;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  