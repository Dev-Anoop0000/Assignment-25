function myfun() {
    let a = document.getElementById('amount').value;
    let b = document.getElementById('people').value;
    let total = (a / b).toFixed(2)
    document.getElementById('result').innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>${total}`;
}