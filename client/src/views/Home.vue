<template>
  <div>
    <!-- En-tête -->
    <Header />

    <!-- Contenu principal -->
    <main id="main-content">
      <!-- Carrousel -->
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item">
            <img src="@/assets/images/blackFriday_1.png" alt="Promotion 1" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/blackFriday_2.png" alt="Promotion 2" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/blackFriday_3.png" alt="Promotion 3" />
          </div>
        <!-- &lt and &gt are the arrow -->  
        </div>
        <button class="carousel-prev">&lt;</button> 
        <button class="carousel-next">&gt;</button>
      </div>

      <!-- Produits Populaires -->
      <section class="popular-products">
        <h2>Produits Populaires</h2>
        <div class="product-grid">
          <div v-for="product in popularProducts" :key="product.id" class="product-item">
            <img :src="product.image || 'placeholder.jpg'" alt="Image du produit" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }} €</p>
            <button @click="addToCart(product)">Ajouter au Panier</button>
          </div>
        </div>
      </section>

      <!-- Offres Spéciales -->
      <section class="special-offers">
        <h2>Offres Spéciales</h2>
        <div class="offer-list">
          <div v-for="offer in specialOffers" :key="offer.id" class="offer-item">
            <img :src="offer.image || 'placeholder.jpg'" alt="Image du produit" />
            <div>
              <h3>{{ offer.name }}</h3>
              <p>Prix : {{ offer.price }} €</p>
              <p>Offre : {{ offer.discount }}%</p>
            </div>
            <button @click="addToCart(offer)">Ajouter au Panier</button>
          </div>
        </div>
      </section>

      <!-- Actions Rapides -->
      <section class="quick-actions">
        <h2>Actions Rapides</h2>
        <div class="actions">
          <button @click="goToPage('/products')">Voir Tous les Produits</button>
          <button @click="goToPage('/categories')">Parcourir les Catégories</button>
          <button @click="goToPage('/cart')">Accéder au Panier</button>
        </div>
      </section>
    </main>

    <!-- Pied de page -->
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Header, Footer },
  data() {
    return {
      popularProducts: [], // Liste des produits populaires
      specialOffers: [], // Liste des offres spéciales
    };
  },
  methods: {
  async fetchPopularProducts() {
    try {
      const response = await fetch("http://localhost:3000/products/popular");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des produits populaires");
      }
      const data = await response.json();
      this.popularProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
    } catch (error) {
      console.error("Erreur lors du chargement des produits populaires :", error);
    }
  },
    async fetchSpecialOffers() {
      try {
        const response = await fetch("http://localhost:3000/products/special-offers"); // Endpoint pour les offres spéciales
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des offres spéciales");
        }
        const data = await response.json();
        // Limiter à 4 offres aléatoires
        this.specialOffers = data.sort(() => 0.5 - Math.random()).slice(0, 4);
      } catch (error) {
        console.error("Erreur lors du chargement des offres spéciales :", error);
      }
    },
    addToCart(product) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} a été ajouté au panier.`);
    },
    goToPage(path) {
      this.$router.push(path);
    },
  },
  mounted() {
    this.fetchPopularProducts(); // Appelle la méthode pour charger les produits populaires
    this.fetchSpecialOffers();  // Appelle la méthode pour charger les offres spéciales
  },
};
</script>

<style scoped>
/* Styles pour le contenu principal */
#main-content {
  padding: 20px;
}

/* Produits Populaires */
.popular-products .product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.popular-products .product-item {
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

.popular-products .product-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

/* Offres Spéciales */
.special-offers .offer-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.special-offers .offer-item {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
}

/* Actions Rapides */
.quick-actions .actions {
  display: flex;
  gap: 20px;
}

.quick-actions button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quick-actions button:hover {
  background-color: #45a049;
}
</style>
