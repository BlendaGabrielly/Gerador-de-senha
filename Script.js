let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let container = document.querySelector("#container");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@";
let newpassword = "";

sizePassword.textContent = sliderElement.value;

sliderElement.addEventListener("input", function() {
    sizePassword.textContent = this.value;
});

function generate() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    container.classList.remove("hide");
    password.textContent = pass;
}

password.addEventListener("click", function() {
    let textarea = document.createElement("textarea");
    textarea.value = password.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
});
