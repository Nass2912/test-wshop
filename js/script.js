$(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    loop: true,
    autoplay: true,
    margin: 50,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
});


const emailinput = document.querySelector(".input-element");
        const submitbutton = document.querySelector(".submit");
        const account = document.querySelector(".user-settings")
        submitbutton.addEventListener("click", (event) => {
           event.preventDefault();
           account.innerHTML = emailinput.value;

        })
