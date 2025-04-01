<template>
    <div>
      <Header />
  
      <main>
        <h1>Customer Support</h1>
        <p>Welcome to our support center. How can we assist you?</p>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#shipping">Shipping Information</a></li>
        </ul>
  
        <section id="faq">
          <h2>FAQ</h2>
          <p>Find answers to frequently asked questions.</p>
        </section>
  
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Send us an email at support@example.com or call us at 123-456-7890.</p>
        </section>
  
        <section id="shipping">
          <h2>Shipping Information</h2>
          <p>Check our delivery times and rates.</p>
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