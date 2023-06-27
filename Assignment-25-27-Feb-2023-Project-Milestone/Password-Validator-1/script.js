function validate() {
    var pass = document.getElementById("pass-1");
    var upper = document.getElementById("upper");
    var lower = document.getElementById("lower");
    var num = document.getElementById("number");
    var len = document.getElementById("length");
    var special = document.getElementById("special_char");

    // check if pass value contain a number
    if (pass.value.match(/[0-9]/)) {
        // match is function which matchesa regular expre....
        num.style.color = "green";
    } else {
        // otherwise
        num.style.color = "red";
    }
    // check if pass value contain a uppercase
    if (pass.value.match(/[A-Z]/)) {
        // match is function which matchesa regular expre....
        upper.style.color = "green";
    } else {
        // otherwise
        upper.style.color = "red";
    }

    // check if pass value contain a lower
    if (pass.value.match(/[a-z]/)) {
        // match is function which matchesa regular expre....
        lower.style.color = "green";
    } else {
        // otherwise
        lower.style.color = "red";
    }
    // check if pass value contain a special char
    if (pass.value.match(/[!\@\#\$\%\^\&\<\>\?\,\.\_\-\+\=]/)) {
        // match is function which matchesa regular expre....
        special.style.color = "green";
    } else {
        // otherwise
        special.style.color = "red";
    }
    // check if pass value contain more than 6 characters
    if (pass.value.length >= 6) {
        // match is function which matchesa regular expre....
        len.style.color = "green";
    } else {
        // otherwise
        len.style.color = "red";
    }
}
// Now Password validation function.
function confirm() {
    var pass1 = document.getElementById("pass-1");
    var pass2 = document.getElementById("pass-2");
    if (pass1.value == pass2.value) {
        function message1() {
            document.getElementById("form").style.display = "none";
            var a = document.getElementById("print");
            a.style.display = 'flex';
            let mess1 = document.createElement("h1");
            mess1.innerText = "Password Matched";
            document.getElementById("print").appendChild(mess1);
        }
        console.log(message1());

        function reloadP() {
            document.location.reload();
            myFunction();
        }
        setTimeout(reloadP, 4000);


    } else {
        function message2() {
            document.getElementById("form").style.display = "none";
            var a = document.getElementById("print");
            a.style.display = 'flex';
            let mess2 = document.createElement("h1");
            mess2.innerText = "Password Not Matched";
            document.getElementById("print").appendChild(mess2);
            console.log(pass1.value);
        }
        message2();

        function reloadP() {
            document.location.reload();
            myFunction();
        }
        setTimeout(reloadP, 3000);
    }
}

let log = document.getElementById("login");
log.addEventListener("click", confirm);