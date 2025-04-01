<template>
  <div>
    <Header />

    <!--add a product as an admin-->
    <main>
      <h1>Product Management</h1>
      <section class="add-product-form">
        <h2>Add a Product</h2>
        <form @submit.prevent="addProduct">
          <div>
            <label for="name">Product Name</label>
            <input type="text" id="name" v-model="productName" required />
          </div>
          <div>
            <label for="price">Price</label>
            <input type="number" id="price" v-model="productPrice" required />
          </div>
          <div>
            <label for="image">Image (URL)</label>
            <input type="text" id="image" v-model="productImage" />
          </div>
          <button type="submit">Add Product</button>
        </form>
        <p v-if="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
      </section>

      <!-- remove a product as an admin-->
      <section class="product-list">
        <h2>Product List</h2>
        <ul>
          <li v-for="product in products" :key="product.id">
            <div class="product-details">
              <img :src="product.image || 'placeholder.jpg'" alt="Product Image" />
              <div>
                <p><strong>{{ product.name }}</strong></p>
                <p>{{ product.price }} €</p>
              </div>
            </div>
            <button @click="deleteProduct(product.id)">Delete</button>
          </li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
</template>


<script>
// importation of header and footer
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "AddProduct",
  components: { Header, Footer },
  data() {
    return {
      productName: "",
      productPrice: "",
      productImage: "",
      message: "",
      isSuccess: false,
      products: [], // Liste des produits
    };
  },
  methods: {
    // fetches the list of product from the server
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
    async addProduct() {
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.productName,
            price: parseFloat(this.productPrice),
            image: this.productImage || null,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          this.message = data.message;
          this.isSuccess = true;
          this.productName = "";
          this.productPrice = "";
          this.productImage = "";
          this.fetchProducts(); // Recharger la liste des produits
        } else {
          this.message = data.error || "Erreur lors de l'ajout du produit";
          this.isSuccess = false;
        }
      } catch (error) {
        this.message = "Erreur lors de la communication avec le serveur.";
        this.isSuccess = false;
      }
    },
    async deleteProduct(id) {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        if (response.ok) {
          this.message = data.message;
          this.isSuccess = true;
          this.fetchProducts(); // Recharger la liste après suppression
        } else {
          this.message = data.error || "Erreur lors de la suppression du produit";
          this.isSuccess = false;
        }
      } catch (error) {
        this.message = "Erreur lors de la communication avec le serveur.";
        this.isSuccess = false;
      }
    },
  },
  mounted() {
    this.fetchProducts(); // Charger les produits au démarrage
  },
};
</script>

<style>
/* Styles pour la gestion des produits */
.add-product-form, .product-list {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-list ul {
  list-style: none;
  padding: 0;
}

.product-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.product-details {
  display: flex;
  align-items: center;
}

.product-details img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.product-details img {
  width: 100px; /* Largeur définie */
  height: 100px; /* Hauteur définie */
  object-fit: cover; /* Maintient le cadrage sans déformer l'image */
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 5px 10px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #c9302c;
}

</style>
