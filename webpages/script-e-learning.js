//Starting of Action Register Form
const wrapper = document.querySelector(".r-wrapper"),
                    signupHeader = document.querySelector(".signup .form-header"),
                    loginHeader = document.querySelector(".login .form-header");
                    loginHeader.addEventListener("click", () => {
                    wrapper.classList.add("active");
                    });
                    signupHeader.addEventListener("click", () => {
                    wrapper.classList.remove("active");
});
//Ending of Action Register Form


//Starting of Action Top Buttons
function redirectToRegister() {
    window.location.href='#register';
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