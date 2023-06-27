let item = document.querySelectorAll(".item");

let mainPrice = document.querySelectorAll(".main-price");
console.log(mainPrice[0].innerHTML);

let cart = [];

function add(x) {
    cart.push(x)
    console.log(cart)
}

document.getElementsByTagName("button")[0].addEventListener("click", add(parseFloat(mainPrice[1].innerHTML)));

// ------ Adding -----
let product = document.getElementById("box");
product.appendChild(item[0]);