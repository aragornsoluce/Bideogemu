<template>
    <div>
      <Header />
  
      <main>
        <h1>Website Terms and Conditions</h1>
        <p>
          By using this website, you agree to the following terms and conditions. If you do not agree with these terms, please do not use this website.
        </p>
        
        <section>
          <h2>1. Use of the Website</h2>
          <p>
            This website allows you to purchase products, access information, and benefit from our services. You agree to use this website legally and to respect copyrights and other applicable laws.
          </p>
        </section>
  
        <section>
          <h2>2. Registration and User Accounts</h2>
          <p>
            To access certain features, you must create a user account. You are responsible for maintaining the confidentiality of your login credentials and all activities on your account.
          </p>
        </section>
  
        <section>
          <h2>3. Privacy Policy</h2>
          <p>
            We respect your privacy. For more information on how we process your personal data, please refer to our <a href="/politique" target="_blank">privacy policy</a>.
          </p>
        </section>
  
        <section>
          <h2>4. Orders and Returns</h2>
          <p>
            When you place an order, you agree to the terms related to delivery, payment, and product returns. Details can be found in our sales terms and conditions.
          </p>
        </section>
  
        <section>
          <h2>5. Liability</h2>
          <p>
            We strive to keep this website up to date and ensure the accuracy of the information provided, but we do not guarantee the accuracy or completeness of all information.
          </p>
        </section>
  
        <section>
          <h2>6. Changes to the Terms</h2>
          <p>
            We reserve the right to modify these terms and conditions at any time. Changes will be published on this page and will take effect immediately upon publication.
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
  