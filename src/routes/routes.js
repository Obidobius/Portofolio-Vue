import Vue from 'vue'
import VueRouter from 'vue-router';
import AboutPage from '../containers/pages/AboutPage';
import CardSpecificPage from '../containers/pages/CardSpecificPage';
import ContactUsPage from '../containers/pages/ContactUsPage';
import HomePage from '../containers/pages/HomePage';
import LoginPage from '../containers/pages/LoginPage';
import CardContainer from '../components/cardContainer/CardContainer';
import CardList from '../components/cardList/CardList';
import Navigation from '../components/navigation/Navigation';
import SearchBar from '../components/searchBar/SearchBar';
import ContactForm from '../components/contactForm/ContactForm';

Vue.use(VueRouter);

    const router = new VueRouter({
        routes: 
        [
            {
                path:'/about-us', //What the user see on the url
                name:'about',   //Keyword to link the page
                component: AboutPage
            },
            {
                path:'/contact-us',
                name:'contact',
                component: ContactForm
            },
            {
                path:'/search',
                name:'searchbar',
                component:SearchBar
            },
            {
                path:'/contact',
                name:'contactUs',
                component: ContactUsPage
            },
            {
                path:'/home',
                name:'homePage',
                component: HomePage
            },
            {
                path:'/',
                name:'loginPage',
                component: LoginPage
            },
            {
                path:'card-list',
                name:'CardList',
                component: CardList
            },
            {
                path:'card-container',
                name:'cards',
                component: CardContainer
            },
            {
                path:'/specific-card',
                name:'specific',
                component: CardSpecificPage
            },
            {
                path:'navigation',
                name:'Navigation',
                component: Navigation
            }

        ]
    });

    export default router;