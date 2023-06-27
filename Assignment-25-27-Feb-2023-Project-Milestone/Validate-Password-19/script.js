let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("button");
let result = document.querySelector("span");


let mail = "anoopg273309@gmail.com";
let pass = 'abcd@1234';


function validate() {
    if (mail == email.value && pass == password.value) {
        result.style.color = "#05fc05";
        result.style.fontSize = "25px";
        result.style.fontWeight = "800"
        result.innerHTML = "&#x2713";
    }
    console.log(email.value)

    if (mail != email.value && pass != password.value) {
        result.style.color = "red";
        result.innerHTML = "Wrong Email & Password";
    }

    if (mail == email.value && pass != password.value) {
        result.style.color = "red";
        result.innerHTML = "Wrong Password";
    }

    if (mail != email.value && pass == password.value) {
        result.style.color = "red";
        result.innerHTML = "Wrong Email";
    }
}
btn.addEventListener("click", validate);