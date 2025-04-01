import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Auth from '@/views/Auth.vue';
import NewRegister from '@/views/New_register.vue'; // Import du composant
import ProductsPage from "@/views/ProductsPage.vue";
import AddProduct from "@/views/AddProduct.vue";
import UserDashboard from "@/views/UserDashboard.vue";
import Cart from "@/views/Cart.vue";
import SearchResults from "@/views/SearchResults.vue";
import Politics from "@/views/Politics.vue";
import Help from "@/views/Help.vue";
import SitePartenaire from '@/views/SitePartenaire.vue';
import Condition from '@/views/Conditions.vue';
import GestionCookies from '@/views/GestionCookies.vue';





// permet de créer des chemins d'accès entre mes fichiers 
const routes = [
    { path: '/', name: 'Home', component: Home },      // Page d'accueil / on leur donne des surnoms afin de simplifier l'appellation
    { path: '/auth', name: 'Auth', component: Auth },  // Page connexion/inscription
    { path: '/register', name: 'NewRegister', component: NewRegister }, // Nouvelle route pour Newregister
    { path: "/products", name: "Products", component: ProductsPage }, // Route pour la page produits
    { path: "/add-product", name: "AddProduct", component: AddProduct }, // route pour la page Admin
    { path: "/user-dashboard", name: "UserDashboard", component: UserDashboard }, // route pour l'utilisateur
    { path: "/cart", name: "Cart", component: Cart }, // Route pour le panier
    { path: "/search", name: "SearchResults", component: SearchResults }, // pour la barre de recherche
    { path: "/sitepartenaire", name: "SitePartenaire", component: SitePartenaire},
    { path: "/help", name: "Help", component: Help},
    { path: "/politics", name: "Politics", component: Politics},
    { path: "/gestioncookies", name: "GestionCookies", component: GestionCookies},
    { path: "/Conditions", name: "Conditions", component: Condition},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
