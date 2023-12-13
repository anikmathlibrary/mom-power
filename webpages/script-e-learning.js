var showWindowLinks = document.querySelectorAll('.show-window');
var floatingWindows = document.querySelectorAll('.floating-window');
showWindowLinks.forEach(function(link) {
link.addEventListener('click', function(e) {
e.stopPropagation(); // Prevents the click event from propagating to the document
var targetId = this.getAttribute('data-target');
var targetWindow = document.getElementById(targetId);
if (targetWindow.style.display === 'none' || targetWindow.style.display === '') {
    floatingWindows.forEach(function(window) {
        window.style.display = 'none';
        });
        targetWindow.style.display = 'block';
        } else {
        targetWindow.style.display = 'none';
        }
        });
        });
        document.addEventListener('click', function() {
        floatingWindows.forEach(function(window) {
        window.style.display = 'none';
        });
        });

//end

//for register form
const wrapper = document.querySelector(".r-wrapper"),
                    signupHeader = document.querySelector(".signup .form-header"),
                    loginHeader = document.querySelector(".login .form-header");
                    loginHeader.addEventListener("click", () => {
                    wrapper.classList.add("active");
                    });
                    signupHeader.addEventListener("click", () => {
                    wrapper.classList.remove("active");
});




function redirectToRegister() {
    window.location.href='#register';
}


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
