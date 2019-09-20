
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



var oTop = document.getElementById('top'),
            owhet = window.innerHeight,
            obody = document.body;

        // 当网页被卷过超过整个屏幕的高度时，切换top按钮的透明为1，不然就是0
        function toggleOpacity() {
            var stp = obody.scrollTop;
            console.log(stp);
            if (stp > owhet) {
                oTop.style.display = "block";
                setTimeout(function() {
                    oTop.style.opacity = 1;
                }, 10);
            } else {
                oTop.style.display = "none";
                oTop.style.opacity = 0;
            }
        }

        // 当点击top按钮时，每30毫秒减少当前stp的一半，直至为0时，清除计时器
        function toTheTop() {
            var timer = setInterval(function() {
                var stp = obody.scrollTop;
                if (stp > 0) {
                    stp -= stp / 2;
                    obody.scrollTop = stp;
                } else {
                    clearInterval(timer)
                }
            }, 30)
        }

        oTop.onclick = toTheTop;
        obody.ontouchmove = obody.onscroll = toggleOpacity;
