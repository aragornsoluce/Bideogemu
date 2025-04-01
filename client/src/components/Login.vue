<template>
    <div>
      <h2>Connexion</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Nom d'utilisateur" required />
        <input type="password" v-model="password" placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.username, password: this.password })
          });
          const data = await response.json();
          this.message = data.message || data.error;
        } catch (error) {
          this.message = 'Erreur lors de la connexion';
        }
      }
    }
  };
  </script>
  