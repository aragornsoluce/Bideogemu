<template>
    <div>
      <Header />
  
      <main>
        <h1>Nos Partenaires</h1>
        <p>Découvrez les partenaires qui collaborent avec nous :</p>
        <ul>
          <li>
            <a href="https://partenaire1.com" target="_blank">Partenaire 1</a>
          </li>
          <li>
            <a href="https://partenaire2.com" target="_blank">Partenaire 2</a>
          </li>
          <li>
            <a href="https://partenaire3.com" target="_blank">Partenaire 3</a>
          </li>
        </ul>
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

p {
  text-align: center;
  margin: 10px 0;
}

ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

ul li {
  margin: 10px 0;
}

ul li a {
  color: #007BFF;
  text-decoration: none;
  font-weight: bold;
}

ul li a:hover {
  text-decoration: underline;
}
</style>