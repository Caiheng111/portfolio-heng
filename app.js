

const hambuger=document.querySelector(".menu_hambuger");
const navLinks=document.querySelector(".nav_links");
const links=document.querySelectorAll(".nav_links li");
const menu=document.querySelector(".menu");
const navInfo=document.querySelector(".info");

hambuger.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


menu.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  navInfo.classList.toggle("hidden")

})


