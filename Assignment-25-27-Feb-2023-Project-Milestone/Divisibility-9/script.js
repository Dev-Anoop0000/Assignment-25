let lenght = prompt("Enter the lenght of Array ; ");
lenght = parseInt(lenght);
let i = 0;
let arr = [];
while (i < lenght) {
    let val = parseInt(prompt(`Enter the value of index ${i} : `));
    console.log(val);
    arr.push(val);
    i++;
}
document.getElementById("Array").style.display = "block";
document.getElementById("Array").innerHTML = `Your Array : [ ${arr} ]`;
let item = [];

function check() {
    for (let i of arr) {
        if (i % 3 == 0) {
            if (i % 2 == 1) {
                // console.log(i);
                item.push(i);
            }
            continue;
        }
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `Your Array item which is divisible by 3 : [ ${item} ]`;
}
let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", check);