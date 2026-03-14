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


// const track = document.getElementById("project-track");

// track.innerHTML += track.innerHTML;

// let scrollAmount = 0;

// function autoScroll(){
//    scrollAmount += 0.5;

//    if(scrollAmount >= track.scrollWidth / 2){
//       scrollAmount = 0;
//   }
//       track.style.transform = `translateX(-${scrollAmount}px)`

//       requestAnimationFrame(autoScroll);
//    }

//    autoScroll();
   


