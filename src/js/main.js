
import { app as firebase } from './firebase-config'
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
require('bootstrap')

//darkmode module simple
const storedTheme = localStorage.getItem('theme')

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// const setTheme = function (theme) {
//   if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     document.documentElement.setAttribute('data-bs-theme', 'dark')
//   } else {
//     document.documentElement.setAttribute('data-bs-theme', theme)
//   }
// }

const setTheme = function (theme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches){
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
  }

setTheme(getPreferredTheme())

// const showActiveTheme = theme => {
//   const activeThemeIcon = document.querySelector('.theme-icon-active use')
//   const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
//   const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

//   document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
//     element.classList.remove('active')
//   })

//   btnToActive.classList.add('active')
//   activeThemeIcon.setAttribute('href', svgOfActiveBtn)
// }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (storedTheme !== 'light' || storedTheme !== 'dark') {
    setTheme(getPreferredTheme())
  }
})

window.addEventListener('DOMContentLoaded', () => {
//   showActiveTheme(getPreferredTheme())

  document.querySelectorAll('[data-bs-theme-value]')
    .forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value')
        localStorage.setItem('theme', theme)
        setTheme(theme)
        // showActiveTheme(theme)
      })
    })
})

//darkmode module
// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// darkModeMediaQuery.addEventListener('change', (e) => {
//     const darkModeOn = e.matches;
//     if (darkModeOn) {
//         document.getElementsByTagName("nav").classList.add('navbar-dark');
//     } else document.getElementsByTagName("nav").classList.remove('navbar-dark');
    
    
//     //   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
//     //   darkModeOn ? document.getElementsByTagName('figcaption').innerHTML = "Don't be naugthy, dark mode is not supported!" : document.getElementsByTagName('figcaption').innerHTML = "Good boi!"
// });
if (process.env.NODE_ENV !== 'production') {

  console.log('Looks like we are in development mode!');

}