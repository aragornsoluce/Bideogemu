<template>
  <div>
    <Header />
      <h1>Registration</h1>
      <section class="auth-section">
        <div class="register-form">
          <h2>Create an account</h2>
          <form @submit.prevent="register">
            <input type="text" v-model="registerUsername" placeholder="Username" required />
            <input type="password" v-model="registerPassword" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p>{{ registerMessage }}</p>
        </div>
      </section>
    <Footer />
  </div>
</template>


<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import '@/assets/scripts/Home_js.js';


export default {
  name: "Register",
  components: { Header, Footer },
  data() {
    return {
      registerUsername: "",
      registerPassword: "",
      registerMessage: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.registerUsername,
            password: this.registerPassword,
          }),
        });
        const data = await response.json();
        this.registerMessage = data.message || data.error;
      } catch (error) {
        this.registerMessage = "Erreur lors de l'inscription.";
      }
    },
  },
};
</script>

<style >

/* Styles spécifiques à la page d'inscription */
.auth-section {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.register-form {
  width: 40%;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #45a049;
}

h1 {
  text-align: center;
  margin: 20px 0;
}

p {
  color: green;
  font-size: 14px;
}
</style>
