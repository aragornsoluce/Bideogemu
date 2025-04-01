<template>
    <div>
      <Header />
  
      <main>
        <h1>Assistance Client</h1>
        <p>Bienvenue dans notre centre d'assistance. Comment pouvons-nous vous aider ?</p>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Nous contacter</a></li>
          <li><a href="#shipping">Informations sur la livraison</a></li>
        </ul>
  
        <section id="faq">
          <h2>FAQ</h2>
          <p>Retrouvez les réponses aux questions fréquentes.</p>
        </section>
  
        <section id="contact">
          <h2>Nous contacter</h2>
          <p>Envoyez-nous un email à support@exemple.com ou appelez-nous au 123-456-7890.</p>
        </section>
  
        <section id="shipping">
          <h2>Informations sur la livraison</h2>
          <p>Consultez nos délais et tarifs de livraison.</p>
        </section>
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
  line-height: 1.6;
}

h1 {
  color: #333;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin: 10px 0;
}

ul li a {
  color: #007BFF;
  text-decoration: none;
}

ul li a:hover {
  text-decoration: underline;
}

section {
  margin-top: 30px;
}

h2 {
  color: #555;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 5px;
}
</style>