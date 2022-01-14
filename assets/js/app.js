const registerForm = document.querySelector('#register');
const loginForm = document.querySelector('#login');
const createAccount = document.querySelector('#create_account')

createAccount.addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    createAccount.style.display = "none";
})