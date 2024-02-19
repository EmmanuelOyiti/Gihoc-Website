document.addEventListener("DOMContentLoaded", function() {
    const heartIcons = document.querySelectorAll(".heart");

    heartIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            this.classList.toggle("is-active");
        });
    });

    var mixer = mixitup('.product-list', {
        selectors: {
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    });
});
