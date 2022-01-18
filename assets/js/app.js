const registerForm = document.querySelector('#register');
const loginForm = document.querySelector('#login');
const createAccount = document.querySelector('#create_account')

if (createAccount) {
    createAccount.addEventListener("click", function () {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        createAccount.style.display = "none";
    })
}
// your form container
let div = document.querySelector('#register');
let az09 = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
let mail = ['@', '.'];
let pw =["&", "-", "_", "$", "£", "€"];

if (div) {
    const inputs = document.querySelectorAll("#register input:not(input[type=submit])");
    const submit = document.querySelector('#submit-register');

    const textInput = document.querySelector("#register input[type=text]");
    const mailInput = document.querySelector("#register input[type=email]");
    const numberInput = document.querySelector("#register input[type=number]");
    const pw1Input = document.querySelector("#register input[type=password]");
    const pw2Input = document.querySelector("#id-password-repeat");

    submit.addEventListener("click", () => {
        isEmptyInput(inputs);
        checkAgeInput(numberInput);
        checkString(textInput, az09, "Veuillez n'utiliser que de caractères autorisés (a-z A-Z 0-9)");
        checkString(mailInput, Array.from(az09.concat(mail)), "Entrez une adresse mail valide");
        checkMail(mailInput, mail);
        checkPassword(pw1Input, pw2Input, Array.from(az09.concat(mail, pw)), "Entrez une adresse mail valide");
    });

}

/**
 * check if every input have been filled
 * @param inputs
 */
function isEmptyInput(inputs) {
    inputs.forEach(value => {
        value.value = value.value.trim();

        if (value.value.length === 0) {
            value.setCustomValidity('veuillez remplir tous les champs');
        } else
            value.setCustomValidity('');
    })
}

/**
 * check if the age is ok
 * @param input
 */
function checkAgeInput(input) {
    let inputValue = parseInt(input.value.trim());
    if (inputValue < 10 || inputValue > 150)
        input.setCustomValidity('Veuillez entrez un age valide');
    else
        input.setCustomValidity('');
}

/**
 * check if all the characters are authorized
 * @param input
 * @param charactersList
 * @param message
 */
function checkString(input, charactersList, message) {
    let array = (input.value.trim()).split('');

    array.forEach(value => {
        if (!charactersList.includes(value))
            input.setCustomValidity(message);
        else
            input.setCustomValidity('');
    })
}


/**
 * check if there email required character
 * @param input
 * @param mailCharacters
 */
function checkMail(input, mailCharacters) {
    let array = input.value.split('');

    mailCharacters.forEach(value => {
        console.log(value)
        if (!array.includes(value))
            input.setCustomValidity('Entrez une adresse mail valide');
        else
            input.setCustomValidity('');
    })
}

/**
 * Check the password
 * @param input1
 * @param input2
 * @param passwordCharacters
 */
function checkPassword(input1, input2, passwordCharacters) {
    // same passwords ?
    if (input1.value !== input2.value)
        input2.setCustomValidity("Il ne s'agit pas du même mot de passe");
    else
        checkString(input1, passwordCharacters, "Veuillez n'utiliser que a-z A-Z 0-9 & - _ $ £ € @ .")

}