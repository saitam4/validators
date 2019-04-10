let inputCreditCard = document.getElementById("input-creditCard");
let inputCvc = document.getElementById("input-cvc");
let inputAmount = document.getElementById("input-amount");
let inputFirstName = document.getElementById("input-firstName");
let inputLastName = document.getElementById("input-lastName");
let inputCity = document.getElementById("input-city");
let inputState = document.getElementById("input-state");
let inputPostalCode = document.getElementById("input-postalCode");
let inputMessage = document.getElementById("input-message");

let buttonSend = document.querySelector(".btn .btn-primary .btn-sm");


function checkInput() {
    let errorMessage = "";

    if (validator.isCreditCard(inputCreditCard.value) !== true) {
        errorMessage += "Invalid Card<br>";
        inputCreditCard.focus();
    }
    if (validator.isIdentityCard(inputCvc.value, "any") !== true) {
        errorMessage += "Invalid CVC<br>";
        inputCvc.focus();
    }
    if (validator.isNumeric(inputAmount.value) !== true) {
        errorMessage += "Only Numbers<br>";
        inputAmount.focus();
    }
    if (validator.isAlpha(inputFirstName.value) !== true) {
        errorMessage += "Invalid Name<br>";
        inputFirstName.focus();
    }
    if (validator.isAlpha(inputLastName.value) !== true) {
        errorMessage += "Invalid Last Name<br>";
        inputLastName.focus();
    }
    if (validator.isAlpha(inputCity.value) !== true) {
        errorMessage += "Invalid City<br>";
        inputCity.focus();
    }
    if (validator.isAlpha(inputState.value) !== true) {
        errorMessage += "Invalid State<br>";
        inputState.focus();
    }
    if (validator.isPostalCode(inputPostalCode.value, "any") !== true) {
        errorMessage += "Invalid Postal Code<br>";
        inputPostalCode.focus();
    }
    if (validator.isAlpha(inputMessage.value) !== true) {
        errorMessage += "Only Letters<br>";
        inputMessage.focus();
    }

document.querySelector("#inputAlert").innerHTML=errorMessage;


    
    
    
}
document.querySelector("#form").addEventListener("submit", function(e) {
e.preventDefault();
    checkInput();
});
