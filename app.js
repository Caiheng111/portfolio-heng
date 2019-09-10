

const hambuger=document.querySelector(".menu_hambuger");
const navLinks=document.querySelector(".nav_links");
const links=document.querySelectorAll(".nav_links li");

hambuger.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


