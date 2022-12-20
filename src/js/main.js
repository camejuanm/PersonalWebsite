
import { app as firebase } from './firebase-config'
import '../scss/styles.scss'
import '../css/styles.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
require('bootstrap')
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        document.getElementsByTagName("nav").classList.add('navbar-dark');
    } else document.getElementsByTagName("nav").classList.remove('navbar-dark');
    
    
    //   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
    //   darkModeOn ? document.getElementsByTagName('figcaption').innerHTML = "Don't be naugthy, dark mode is not supported!" : document.getElementsByTagName('figcaption').innerHTML = "Good boi!"
});