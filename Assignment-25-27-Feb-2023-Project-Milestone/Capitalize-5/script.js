var fname = document.getElementById("f-name");
let mname = document.getElementById("m-name");
let lname = document.getElementById("l-name");
let field = document.getElementById("field");

function message() {
    field.style.display = "none";
    let ele = document.createElement('div');
    ele.innerHTML = "You are logged. ";
    document.body.appendChild(ele);
    setTimeout(() => { window.location.reload() }, 2000);
}

function cap() {
    fname.value = fname.value.charAt(0).toUpperCase() + fname.value.slice(1);

    mname.value = mname.value.charAt(0).toUpperCase() + mname.value.slice(1);

    lname.value = lname.value.charAt(0).toUpperCase() + lname.value.slice(1);


}


document.getElementsByTagName("input")[0].addEventListener("focusout", cap);
document.getElementsByTagName("input")[1].addEventListener("focusout", cap);
document.getElementsByTagName("input")[2].addEventListener("focusout", cap);

var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", message);