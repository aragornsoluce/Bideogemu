<template>
  <div>
    <Header />

    <main>
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy explains how
        we collect, use, and protect your personal information.
      </p>
      <h2>1. Information Collection</h2>
      <p>We collect personal information when you use our site.</p>

      <h2>2. Use of Information</h2>
      <p>Your information is used solely to improve your user experience.</p>

      <h2>3. Information Sharing</h2>
      <p>We do not share your data with third parties without your consent.</p>

      <h2>4. Your Rights</h2>
      <p>You have the right to view, modify, or delete your personal information.</p>
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