<template>
    <div>
      <Header />
  
      <main>
        <h1>Cookie Management</h1>
        <p>
          This page explains how we use cookies on our website and how you can manage your cookie preferences.
        </p>
  
        <section>
          <h2>1. What is a Cookie?</h2>
          <p>
            A cookie is a small text file placed on your device (computer, smartphone, etc.) when you visit our site. Cookies help us enhance your online experience by remembering your preferences and analyzing your browsing behavior.
          </p>
        </section>
  
        <section>
          <h2>2. Types of Cookies Used</h2>
          <p>
            We use different types of cookies on our site:
          </p>
          <ul>
              <li><strong>Essential Cookies</strong>: These cookies are necessary for the proper functioning of the site, such as those that allow you to log into your account.</li>
              <li><strong>Performance Cookies</strong>: These cookies collect information about how you use our site, such as the pages you visit and the errors you encounter.</li>
              <li><strong>Functionality Cookies</strong>: These cookies remember your preferences, such as the site language or your account settings.</li>
              <li><strong>Advertising Cookies</strong>: These cookies allow us to display advertisements tailored to your interests based on your browsing behavior.</li>
            </ul>
        </section>
  
        <section>
          <h2>3. Managing Cookies</h2>
          <p>
            You can manage your cookie preferences by adjusting your browser settings. You can choose to accept or reject certain types of cookies. However, if you choose to disable some cookies, it may affect the functionality of our site.
          </p>
          <p>
            For more information on managing cookies, refer to your browser's help section.
          </p>
        </section>
  
        <section>
          <h2>4. Consent to Use Cookies</h2>
          <p>
            By continuing to browse our site, you agree to the use of cookies in accordance with this policy. You can modify your preferences at any time by adjusting your browser settings or using our cookie manager.
          </p>
        </section>
  
        <section>
          <h2>5. Changes to the Cookie Policy</h2>
          <p>
            We reserve the right to modify this cookie policy at any time. Changes will be published on this page and will take effect immediately after their publication.
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
  