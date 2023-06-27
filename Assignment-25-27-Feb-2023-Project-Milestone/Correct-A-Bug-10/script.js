let item1 = document.getElementsByTagName("h1")[0].innerText;
let item2 = document.getElementsByTagName("h1")[1].innerText;
let item3 = document.getElementsByTagName("h1")[2].innerText;
let item4 = document.getElementsByTagName("h1")[3].innerText;
let item5 = document.getElementsByTagName("h1")[4].innerText;
let item6 = document.getElementsByTagName("h1")[5].innerText;
let item7 = document.getElementsByTagName("h1")[6].innerText;
let item8 = document.getElementsByTagName("h1")[7].innerText;
let item9 = document.getElementsByTagName("h1")[8].innerText;
let item10 = document.getElementsByTagName("h1")[9].innerText;
console.log(item10);



let cart = [];

let cartBox = document.getElementById("cart");

function addToCart(val) {
    cart.push(val)
    console.log(cart);
    let NumOfItem = cart.length;
    cartBox.innerHTML = NumOfItem;
}


// // New Window
// // let newWin = window.open("about:blank", "hello", "width=200,height=200");

// // newWin.document.write("Hello, world!");

// let newWindow = open('/', 'example', 'width=300,height=300')
// newWindow.focus();

// alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet

// newWindow.onload = function() {
//     let html = `<div style="font-size:30px">Welcome!</div>`;
//     newWindow.document.body.insertAdjacentHTML('afterbegin', html);
// };