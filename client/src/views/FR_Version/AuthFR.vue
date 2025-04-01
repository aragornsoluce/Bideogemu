<template>
  <div>
    <Header />

    <div class="connection-container">
      <div class="existing-client">
      <h2>Connexion</h2>
        <form @submit.prevent="login">
          <input type="text" v-model="loginUsername" placeholder="Nom d'utilisateur" required />

          <div class="password-container">
            <input :type="showPassword ? 'text' : 'password'" v-model="loginPassword" id="password" placeholder="Mot de passe" required />
            <button type="button" id="toggle-password" class="show-password" @click="togglePassword">👁️</button>
          </div>
            <a href="#" class="forgot-password">J'ai oublié mon mot de passe</a>
          <button type="submit">Se connecter</button>
        </form>
        </div>

        <!-- section nouveau client -->
        <div class="new-client">
          <h2>Nouveau client ?</h2>
          <button class="register-button" @click="redirectToRegister">
            Continuer
          </button>
        </div>
        <p>{{ loginMessage }}</p>
      </div>    
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Auth",
  components: { Header, Footer },
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      showPassword: false,
      loginMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.loginUsername,
            password: this.loginPassword,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          // Enregistrer le rôle dans localStorage
          localStorage.setItem("role", data.role);
          localStorage.setItem("user", JSON.stringify({ username: this.loginUsername })); // Stocke l'utilisateur


          if (data.role === "admin") {
            setTimeout(()=>{this.$router.push("/add-product"); // Redirige vers la page admin
            }, 2000);
            this.loginMessage = "Connexion réussie en tant qu'admin !";
          } else {
            this.loginMessage = "Connexion réussie !";
            setTimeout(() => {
            this.$router.push("/user-dashboard"); // Redirige vers une page dédié au personne connecté
          }, 2000);
          }
        } else {
          this.loginMessage = data.error || "Erreur lors de la connexion.";
        }
      } catch (error) {
        this.loginMessage = "Erreur lors de la connexion.";
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    redirectToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>


<style>
@import "@/assets/styles/connection_css.css";
/* Style pour le message d'erreur */
.error-message {
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: center;
}
</style>

