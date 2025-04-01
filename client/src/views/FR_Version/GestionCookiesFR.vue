<template>
    <div>
      <Header />
  
      <main>
        <h1>Gestion des Cookies</h1>
        <p>
          Cette page explique comment nous utilisons les cookies sur notre site web et comment vous pouvez gérer vos préférences en matière de cookies.
        </p>
  
        <section>
          <h2>1. Qu'est-ce qu'un Cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte placé sur votre appareil (ordinateur, smartphone, etc.) lorsque vous visitez notre site. Les cookies nous aident à améliorer votre expérience en ligne en mémorisant vos préférences et en analysant votre comportement de navigation.
          </p>
        </section>
  
        <section>
          <h2>2. Types de Cookies Utilisés</h2>
          <p>
            Nous utilisons différents types de cookies sur notre site :
            <ul>
              <li><strong>Cookies essentiels</strong> : Ces cookies sont nécessaires au bon fonctionnement du site, tels que ceux qui permettent de se connecter à votre compte.</li>
              <li><strong>Cookies de performance</strong> : Ces cookies collectent des informations sur la manière dont vous utilisez notre site, comme les pages que vous consultez et les erreurs que vous rencontrez.</li>
              <li><strong>Cookies de fonctionnalité</strong> : Ces cookies mémorisent vos préférences, comme la langue du site ou les paramètres de votre compte.</li>
              <li><strong>Cookies de publicité</strong> : Ces cookies permettent de vous montrer des publicités adaptées à vos intérêts en fonction de votre comportement de navigation.</li>
            </ul>
          </p>
        </section>
  
        <section>
          <h2>3. Gestion des Cookies</h2>
          <p>
            Vous avez la possibilité de gérer vos préférences en matière de cookies en ajustant les paramètres de votre navigateur. Vous pouvez choisir d'accepter ou de refuser certains types de cookies. Cependant, si vous choisissez de désactiver certains cookies, cela peut affecter la fonctionnalité de notre site.
          </p>
          <p>
            Pour en savoir plus sur la gestion des cookies, consultez la section d'aide de votre navigateur.
          </p>
        </section>
  
        <section>
          <h2>4. Consentement à l'Utilisation des Cookies</h2>
          <p>
            En poursuivant votre navigation sur notre site, vous acceptez l'utilisation des cookies conformément à cette politique. Vous pouvez modifier vos préférences à tout moment en ajustant les paramètres de votre navigateur ou en utilisant notre gestionnaire de cookies.
          </p>
        </section>
  
        <section>
          <h2>5. Modifications de la Politique de Cookies</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Les modifications seront publiées sur cette page et prendront effet immédiatement après leur publication.
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
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  ul li {
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
  