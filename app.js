document.addEventListener("DOMContentLoaded", function() {
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
