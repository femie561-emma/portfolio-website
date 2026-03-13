const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener( "click", () => {

hamburger.classList.toggle("active");

   navMenu.classList.toggle("show");

});


document.querySelector("#nav-menu a").forEach(link =>{
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});

