/*document.getElementById("trigger").onclick = function() {
    open();
};

function open() {
    document.getElementById("menu").classList.toggle("show");
}
function myFunction(x) {
    x.classList.toggle("change");
}*/

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

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

$(document).ready(function(){
    $('.useful-slider').slick('unslick');
      $(".useful_slider").slick({
        arrows:false,
        dots: true,
        infinite: false,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                centerMode:false,
                centerPadding: '0px'
              }
            },
            {
              breakpoint: 380,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                centerMode:false,
                centerPadding: '20px'
              }
            },
            {
              breakpoint: 330,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                focusOnSelect: true,
                centerMode:false,
                centerPadding: '10px'
              }
            }
        ]
  })

    $(".header_slider").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        draggable: false,
        variableWidth: false,
        slidesToShow:1
        
    })
    
});