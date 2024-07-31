$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Creator", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Creator", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
 const scriptURL = 'https://script.google.com/macros/s/AKfycbx-DvwgtZZGYPrG9ebPJdZ0RZnHUanpFpOxuDsiMofAvcjQtLN-6Qg3Wc0nPyLLkMLF/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Your data been successfully submitted"))
                .catch(error => console.error('Error!', error.message))
            })

            document.getElementById("instagramButton").addEventListener("click", function() {
  // Replace "YOUR_INSTAGRAM_PROFILE_URL" with the actual Instagram profile URL
  window.location.href = "https://www.instagram.com/https://www.instagram.com/shubhamchoudharyand//";
});
// Get the progress bar element
var progressBar = document.getElementById("myBar");

// Update the progress bar as the user scrolls
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrolled / windowHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
}
function darkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }