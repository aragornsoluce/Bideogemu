<template>
    <div>
      <Header />
  
      <main>
        <h1>Politique de Confidentialité</h1>
        <p>
          Votre vie privée est importante pour nous. Cette politique explique comment
          nous collectons, utilisons et protégeons vos informations personnelles.
        </p>
        <h2>1. Collecte des Informations</h2>
        <p>Nous collectons des informations personnelles lorsque vous utilisez notre site.</p>
  
        <h2>2. Utilisation des Informations</h2>
        <p>Vos informations sont utilisées uniquement pour améliorer votre expérience utilisateur.</p>
  
        <h2>3. Partage des Informations</h2>
        <p>Nous ne partageons pas vos données avec des tiers sans votre consentement.</p>
  
        <h2>4. Vos Droits</h2>
        <p>Vous avez le droit de consulter, modifier ou supprimer vos informations personnelles.</p>
      </main>
  
      <Footer />
    </div>
  </template>
  
<script>
  import Header from "../components/Header.vue";
  import Footer from "../components/Footer.vue";

  export default {
  name: "Home",
  components: { Header, Footer },
  };
</script>

<style scoped>
main {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  line-height: 1.8;
  color: #444;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #007BFF;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
}

p {
  margin: 10px 0;
}

a {
  color: #007BFF;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>