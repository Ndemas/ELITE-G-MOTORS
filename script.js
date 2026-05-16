function toggleMenu(){
    const nav = document.querySelector(".nav-menu");
    const burger = document.querySelector(".hamburger");

    nav.classList.toggle("active");
    burger.classList.toggle("active");
}

document.addEventListener("click", function(e){
    const nav = document.querySelector(".nav-menu");
    const burger = document.querySelector(".hamburger");

    const isClickInsideNav = nav.contains(e.target);
    const isClickBurger = burger.contains(e.target);

    if(!isClickInsideNav && !isClickBurger){
        nav.classList.remove("active");
        burger.classList.remove("active");
    }
});

document.querySelectorAll(".nav-menu a").forEach(link=>{
    link.addEventListener("click", ()=>{
        document.querySelector(".nav-menu").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("active");
    });
});