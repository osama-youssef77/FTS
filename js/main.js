//hiding the navbar menu
const navLinks = document.querySelectorAll('#link1, #link2, #link3,#link4,#link5,#link6,#link7');
  
navLinks.forEach(el => el.addEventListener('click', event => {
  document.querySelector('.w-nav-button').click();
}));

//carousel settings
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:5,
        loop:true,
        touchDrag:true,
        dots:false,
        nav:true,
        autoplay:true,
        autoplayTimeout: 3000,    
    });
  });

//text anaimation

let sections = document.querySelectorAll('.anmie-sec');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop-500  ;
        let height = sec.offsetHeight+300 ;

        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate')
        }else{
            sec.classList.remove('show-animate')

        }

    }
        )
}