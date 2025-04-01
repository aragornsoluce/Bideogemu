<template>
    <div>
      <Header />
      <main>
        <h1>Votre Panier</h1>
        <section class="cart-section">
          <div v-if="cartItems.length > 0">
            <ul class="cart-items">
              <li v-for="item in cartItems" :key="item.id">
                <div class="item-details">
                  <img :src="item.image || 'placeholder.jpg'" alt="Image du produit" />
                  <div>
                    <h2>{{ item.name }}</h2>
                    <p>{{ item.price }} €</p>
                  </div>
                </div>
                <button @click="removeFromCart(item.id)">Supprimer</button>
              </li>
            </ul>
            <div class="cart-summary">
              <h2>Total : {{ totalPrice }} €</h2>
              <button @click="checkout">Valider le Panier</button>
            </div>
          </div>
          <div v-else>
            <p>Votre panier est vide.</p>
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
    name: "Cart",
    components: { Header, Footer },
    data() {
      return {
        cartItems: [], // Articles ajoutés au panier
      };
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price, 0);
      },
    },
    methods: {
      fetchCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        this.cartItems = cart;
      },
      removeFromCart(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(this.cartItems));
      },
      checkout() {
        alert("Merci pour votre achat !");
        this.cartItems = [];
        localStorage.removeItem("cart");
      },
    },
    mounted() {
      this.fetchCart(); // Charger les articles du panier au démarrage
    },
  };
  </script>
  
  <style scoped>
  /* Styles pour le panier */
  .cart-section {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  
  .cart-items {
    list-style: none;
    padding: 0;
  }
  
  .cart-items li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .item-details {
    display: flex;
    align-items: center;
  }
  
  .item-details img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
  
  .cart-summary {
    text-align: right;
    margin-top: 20px;
  }
  
  .cart-summary h2 {
    font-size: 20px;
    margin-bottom: 10px;
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
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  