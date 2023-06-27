let h1 = document.getElementsByTagName("h1")[0];
let input = document.getElementById("toggle");
let slider = document.querySelector(".slider");
console.log(input.value);

function getValue() {

    if (input.checked == true) {
        h1.innerHTML = "PW Skills"
        document.querySelector(".switch").style.backgroundColor = "rgb(248, 5, 248)";
    }


    if (input.checked == false) {
        h1.innerHTML = "The most affordable learning platform.";
        document.querySelector(".switch").style.backgroundColor = "hsl(0, 2%, 49%)";
    }
}

input.addEventListener("click", getValue);