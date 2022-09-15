function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formE");

    messageElement.textContent = message;
    messageElement.classList.remove("formMessageSuccess", "formMessageError");
    messageElement.classList.add(`formE${type}`);

}

function setInputError(inputElement, message) {
    inputElement.classList.add("FormInputE");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("FormInputE");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // preform your AJAX/fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    })


    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length <10){
                setInputError(inputElement, "Username must be at lease 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});