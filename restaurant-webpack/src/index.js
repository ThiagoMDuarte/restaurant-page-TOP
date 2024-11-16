import HomeTab from './home.js'
import MenuTab from './menu.js'
import AboutTab from './about.js'

import './styles.css';

const contentDiv = document.querySelector('#content')

document.addEventListener('DOMContentLoaded', () => {

document.getElementById('home').addEventListener('click', () => {
    HomeTab(contentDiv);
});

document.getElementById('menu').addEventListener('click', () => {
    MenuTab(contentDiv); 
});

document.getElementById('about').addEventListener('click', () => {
    AboutTab(contentDiv); 
});

    HomeTab(contentDiv);
});