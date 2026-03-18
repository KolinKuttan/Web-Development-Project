// Select main wrapper that contains the forms
const wrapper = document.querySelector('.wrapper');

// Select link that switches to login form
const loginLink = document.querySelector('.login-link');

// Select link that switches to register form
const registerLink = document.querySelector('.register-link');

// Select login popup button in navigation
const btnPopup = document.querySelector('.btnLogin-popup');

// Select close icon inside popup
const iconClose = document.querySelector('.icon-close');


// When user clicks "Register"
if (registerLink) {
registerLink.addEventListener('click', () => {

    // Add 'active' class to wrapper
    // This switches login form to register form
    wrapper.classList.add('active');
});
}


// When user clicks "Login"
if (loginLink) {
loginLink.addEventListener('click', () => {

    // Remove 'active' class
    // This switches register form back to login form
    wrapper.classList.remove('active');
});
}


// When user clicks the Login button in the header
if (btnPopup) {
btnPopup.addEventListener('click', () => {

    // Show the popup by scaling wrapper
    wrapper.classList.add('active-popup');
});
}


// When user clicks close icon
if (iconClose) {
iconClose.addEventListener('click', () => {

    // Hide popup
    wrapper.classList.remove('active-popup');
});
}