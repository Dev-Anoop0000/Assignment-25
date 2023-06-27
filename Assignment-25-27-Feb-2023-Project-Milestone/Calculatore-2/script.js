var num1 = document.getElementById("num-1");
var num2 = document.getElementById("num-2");
var sum = 0;
var minus = 0;
var product = 0;
var division = 0;

function add() {
    var operator = document.getElementById("operator");
    operator.value = "+";
}

function sub() {
    var operator = document.getElementById("operator");
    operator.value = "-";
}

function multi() {
    var operator = document.getElementById("operator");
    operator.value = "*";
}

function div() {
    var operator = document.getElementById("operator");
    operator.value = "/";
}


function calculate() {
    var operation = document.getElementById("operator");
    operation = operation.value;
    console.log(operation, typeof operation);

    switch (operation) {
        case ("+"):
            sum = parseFloat(num1.value) + parseFloat(num2.value);
            document.getElementById("result").innerHTML = sum;
            break;
        case ("-"):
            minus = parseFloat(num1.value) - parseFloat(num2.value);
            document.getElementById("result").innerHTML = minus;
            break;
        case ("*"):
            product = parseFloat(num1.value) * parseFloat(num2.value);
            document.getElementById("result").innerHTML = product;
            break;
        case ("/"):
            division = parseFloat(num1.value) / parseFloat(num2.value);
            document.getElementById("result").innerHTML = division;
            break;
        default:
            document.getElementById("result").innerHTML = "Input Wrong Operator";
    }
};


function butt() {
    document.getElementById("equal").innerText = "Calculate";
    console.log("Anoop");
}

function button() {
    document.getElementById("equal").innerText = "=";
}
let hover = document.getElementById("equal");
hover.addEventListener("mouseover", butt);
hover.addEventListener("mouseout", button);