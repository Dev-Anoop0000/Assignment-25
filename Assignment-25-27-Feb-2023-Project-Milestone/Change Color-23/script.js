let body = document.querySelector("body");
let btn = document.querySelector("button");

let hash;

function changeColor(hash) {
    body.style.backgroundColor = hash;

}

function color() {
    let val = "0123456789ABCDEF";
    let hash = "#";

    for (let i = 0; i < 6; i++) {
        hash = (hash + val[Math.floor(Math.random() * 16)]);
    }

    changeColor(hash);
}

btn.addEventListener("click", color);