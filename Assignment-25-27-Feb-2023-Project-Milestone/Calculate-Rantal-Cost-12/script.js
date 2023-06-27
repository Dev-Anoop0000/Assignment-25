function store() {
    let select = document.getElementById("car");
    let option = select.selectedIndex;
    let day = document.getElementById("day").value;
    let result_div = document.getElementById("result");
    let btn_div = document.getElementById("calc-btn");
    let data;
    let rs = "&#8377"

    console.log(result_div);
    console.log(btn_div);

    function calculate() {
        result_div.style.display = "flex";

        if (option == 0) {
            result_div.innerHTML = "Please select car type";
        } else if (option == 1) {
            data = 4000 * day;
            result_div.innerHTML = `Total = ${rs} ${data}`;
        } else if (option == 2) {
            data = 10000 * day;
            result_div.innerHTML = `Total = ${rs} ${data}`;
        } else if (option == 3) {
            data = 20000 * day;
            result_div.innerHTML = `Total = ${rs} ${data}`;
        } else {
            result_div.innerHTML = "Something went wrong <br> Please contact developer !!!";
        }

    }

    document.getElementsByTagName("button")[0].addEventListener("click", calculate)
}