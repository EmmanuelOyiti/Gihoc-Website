document.addEventListener("DOMContentLoaded", function() {
    //change color when scrolling
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50){
            $("nav").css("background", "#fff");
            $(".nav").css("box-shadow","rgba(0,0,0,0.1)0px 4px 12px");
        }
        else {
            $("nav").css("background", "transparent");
            $("nav").css("box-shadow", "none");
        }
    })
    const heartIcons = document.querySelectorAll(".heart");
// heart
    heartIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            this.classList.toggle("is-active");
        });
    });
// filter
    var mixer = mixitup('.product-list', {
        selectors: {
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    });
    // swiper
    var swiper = new Swiper(".mySwiper",{
        loop: true,
        autoplay: {
            delay:2500,
            disabledOnInteraction: false,
        },
        sliderPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640:{
                sliderPerView:2,
                spaceBetween:20,
            },
            768:{
                sliderPerView:3,
                spaceBetween:40,
            },
            1024:{
                sliderPerView:3,
                spaceBetween:50,
            },
        }
    })
});
