
// import simpleParallax from 'simple-parallax-js';

const hambuger=document.querySelector(".menu_hambuger");
const navLinks=document.querySelector(".nav_links");
const links=document.querySelectorAll(".nav_links li");
const menu=document.querySelector(".menu");
const navInfo=document.querySelector(".info");
const iconScroll=document.querySelector(".icon-scroll");


hambuger.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


menu.addEventListener("click",()=>{
  navLinks.classList.toggle("open");
  navInfo.classList.toggle("hidden")
  iconScroll.classList.toggle("hidden");
  

})


var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'right'
});


var setLogo = function() {

  $('.logo2').each(function() {
    $(this).css('top',
      $('.logo1').offset().top -
      $(this).closest('.logo_image').offset().top
    );
  });

};

$(document).scroll(function() {
  setLogo();
});

setLogo();




