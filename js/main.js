import hamburgerMenu from "./DOMEvents/hamburger_menu.js";

document.addEventListener("DOMContentLoaded", e =>{

    hamburgerMenu(".panel-btn",".nav-menu",".nav-link");


    // Form
    const formulario = document.querySelector('form')

    formulario.addEventListener("submit", e => {
        e.preventDefault()
        console.log(e)

        alert('Datos enviados!')
        formulario.reset()
      });

})