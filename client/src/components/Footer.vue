<template>
  <!-- Footer -->
   <footer>
     <div class="footer-container">
       <!-- Links Section -->
       <div class="footer-links">
         <div>
           <h4>USEFUL LINKS</h4>
           <a href="/user-dashboard">My Account</a>
           <a href="/cart">My Cart</a>
         </div>
         <div>
           <h4>HELP</h4>
           <a href="/help">Need Help?</a>
           <a href="#">Site Map</a>
         </div>
         <div>
           <h4>BIDEOGĒMU</h4>
           <a href="/Conditions">Terms and Conditions</a>
           <a href="/politics">Privacy Policy</a>
           <a href="gestioncookies">Cookie Management</a>
           <a href="#">About Us</a>
         </div>
       </div>

       <!-- Social Media Icons Section -->
       <div class="social-icons">
         <a href="https://www.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" /></a>
         <a href="https://www.facebook.com/"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
         <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s" alt="YouTube" /></a>
         <a href="https://pl.pinterest.com/#shop"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" /></a>
       </div>

       <!-- Payment Section -->
       <div class="payment-options">
         <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Visa" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png" alt="MasterCard" />
         <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="PayPal" />
         <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="AmEx" />
       </div>

       <!-- App Promotion -->
       <div class="app-promotion">
         <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="App Store" />
         <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="Google Play" />
       </div>

       <!-- Footer Bottom -->
       <div class="footer-bottom">
         <p>&copy; Bideogēmu France 2024. All rights reserved.</p>
         <p><a href="/Conditions">Terms and Conditions</a> | <a href="/politics">Privacy Policy</a></p>
       </div>
     </div>
   </footer>
</template>



<script>
export default {
  name: "Footer",
};
</script>

<style>
/* Bas de page */
footer {
    background-color: #f9f9f9;
    padding: 20px 0;
    border-top: 1px solid #ddd;
}

.footer-container {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
}

.footer-links {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 20px;
}

.footer-links div {
    flex: 1;
    padding: 0 10px;
}

.footer-links h4 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
}

.footer-links a {
    text-decoration: none;
    color: #555;
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
}

.footer-links a:hover {
    text-decoration: underline;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
}

.social-icons img {
    width: 24px;
    height: 24px;
}

.payment-options, .app-promotion {
    text-align: center;
    margin-bottom: 20px;
}

.payment-options img, .app-promotion img {
    width: 50px;
    margin: 0 10px;
}

.footer-bottom {
    text-align: center;
    font-size: 12px;
    color: #888;
    padding: 10px 0;
}

.footer-bottom a {
    text-decoration: none;
    color: #888;
}

.footer-bottom a:hover {
    text-decoration: underline;
}
</style>
