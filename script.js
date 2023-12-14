//Starting of Action Dots
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("quoteSlides");
    const dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("activeDot", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeDot";
    
    setTimeout(showSlides, 10000);
}

function currentSlide(n) {
    clearInterval();
    slideIndex = n - 1;
    showSlides();
}
//Ending of Action Dots

//Starting of Action Top Toggle
window.onscroll = function() {
    toggleToTopButton();
};
function toggleToTopButton() {
    var button = document.getElementById('toTopButton');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    }
    else {
        button.style.display = 'none';
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Ending of Action Top Toggle