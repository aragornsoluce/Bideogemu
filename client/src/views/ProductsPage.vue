<template>
  <div>
    <Header />
    <main>
      <h1>List of products</h1>
      <section class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image || 'placeholder.jpg'" alt="Image du produit" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.price }} €</p>
          <button class="add-to-cart" @click="addToCart(product)">Add to cart</button>
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
  name: "ProductPage",
  components: { Header, Footer },
  data() {
    return {
      products: [], // Liste des produits
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        if (response.ok) {
          this.products = data;
        }
      } catch (error) {
        console.error("Erreur lors du chargement des produits");
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
    this.fetchProducts(); // Charger les produits au démarrage
  },
};
</script>

<style>
/* Mise en page avec CSS Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items par ligne */
  gap: 20px; /* Espace entre les items */
  padding: 20px;
}

.product-item {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.product-item img {
  width: 200px;
  height: 350px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-item h2 {
  font-size: 18px;
  margin: 10px 0;
}

.product-item p {
  font-size: 16px;
  color: #4CAF50;
  font-weight: bold;
}

button.add-to-cart {
  background: linear-gradient(45deg, #4CAF50, #45a049); /* Dégradé */
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

button.add-to-cart:hover {
  background: linear-gradient(45deg, #45a049, #4CAF50); /* Dégradé inversé */
  transform: scale(1.05); /* Zoom léger */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

button.add-to-cart:active {
  transform: scale(0.95); /* Réduction à l'appui */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button.add-to-cart:disabled {
  background: #ccc; /* Couleur désactivée */
  color: #888;
  cursor: not-allowed;
  box-shadow: none;
}
</style>
