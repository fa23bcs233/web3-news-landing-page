const navBar = document.querySelector(".nav-menu")
const toggleButton = navBar.querySelector(".menu-toggle");
const MenuIcon = toggleButton.querySelector("img");
let menuActive = 0;


toggleButton.addEventListener("click" , ()=>{
    navBar.classList.toggle("active");
    if(menuActive == 0){
        menuActive = 1;
        MenuIcon.src = "./assets/images/icon-menu-close.svg";
    }else{
        menuActive = 0;
        MenuIcon.src = "./assets/images/icon-menu.svg"
    }
})

