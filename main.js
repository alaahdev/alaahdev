
let menu = document.querySelector(".menu-icon");

let links = document.querySelector(".nav-links");



menu.addEventListener("click", ()=>{
    links.classList.toggle("active")
})


document.getElementById("year").textContent = new Date().getFullYear();