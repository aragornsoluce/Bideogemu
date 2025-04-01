<template>
    <div>
      <Header />
  
      <main>
        <h1>Conditions Générales du Site</h1>
        <p>
          En utilisant ce site, vous acceptez les conditions générales suivantes. Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser ce site.
        </p>
        
        <section>
          <h2>1. Utilisation du Site</h2>
          <p>
            Ce site vous permet d'acheter des produits, de consulter des informations, et de bénéficier de nos services. Vous vous engagez à utiliser ce site de manière légale et à respecter les droits d'auteur et autres lois applicables.
          </p>
        </section>
  
        <section>
          <h2>2. Inscription et Comptes Utilisateurs</h2>
          <p>
            Pour accéder à certaines fonctionnalités, vous devez créer un compte utilisateur. Vous êtes responsable de la confidentialité de vos informations d'identification et de toutes les activités sur votre compte.
          </p>
        </section>
  
        <section>
          <h2>3. Politique de Confidentialité</h2>
          <p>
            Nous respectons votre vie privée. Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href="/politique" target="_blank">politique de confidentialité</a>.
          </p>
        </section>
  
        <section>
          <h2>4. Commandes et Retours</h2>
          <p>
            Lorsque vous passez une commande, vous acceptez les termes liés à la livraison, au paiement et aux retours des produits. Les détails peuvent être consultés dans nos conditions de vente.
          </p>
        </section>
  
        <section>
          <h2>5. Responsabilité</h2>
          <p>
            Nous nous efforçons de maintenir ce site à jour et de garantir que les informations sont exactes, mais nous ne garantissons pas l'exactitude ou l'exhaustivité de toutes les informations.
          </p>
        </section>
  
        <section>
          <h2>6. Modifications des Conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les modifications seront publiées sur cette page et prendront effet immédiatement après leur publication.
          </p>
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
  