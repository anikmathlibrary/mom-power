//Starting of Action Top Buttons
function redirectToContact() {
    window.location.href='../index.html#index-contact';
}
//Endting of Action Top Buttons

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