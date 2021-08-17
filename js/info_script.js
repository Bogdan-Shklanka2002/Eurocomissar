



function openNav() {
    if(window.innerWidth >= 656 ){
        document.getElementById("mySidenav").style.width = "375px"
    }
    else{
         document.getElementById("mySidenav").style.width = "100%"
    $('body').addClass("lock");
    }
  
        }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
           $('body').removeClass("lock");  
        }


$(document).ready(function(){
    $(".header_slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        draggable: false
    })
});