document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const loginLink = wrapper.querySelector('.login-link');
    const registerLink = wrapper.querySelector('.register-link');
    const closeBtn = wrapper.querySelector('.icon-close');

    // Open popup (default to login)
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        wrapper.classList.remove('active'); // default to login
    });

    // Close popup when clicking the X icon
    closeBtn.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        wrapper.classList.remove('active'); // reset to login
    });

    // Switch to register form
    registerLink.addEventListener('click', e => {
        e.preventDefault();
        wrapper.classList.add('active'); // shows register form
    });

    // Switch to login form
    loginLink.addEventListener('click', e => {
        e.preventDefault();
        wrapper.classList.remove('active'); // shows login form
    });

    // Click outside popup closes it
    wrapper.addEventListener('click', e => {
        if (e.target === wrapper) { // click on overlay
            wrapper.classList.remove('active-popup');
            wrapper.classList.remove('active'); // reset to login
        }
    });
});