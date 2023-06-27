function calculateTotal(cart) {
    cart.map((total, item) => {

        totalItem = totalItem + total.quantity;
        totalPrice = totalPrice + total.unitPrice * total.quantity

    });
    console.log(totalItem);
    console.log(totalPrice);
    document.getElementById("item").innerHTML = totalItem;
    totalPrice;
    document.getElementById("price").innerHTML = `&#x20B9 ${totalPrice}`;
};





const cart = [{
    unitPrice: 100,
    quantity: 2
}, {
    unitPrice: 500,
    quantity: 4
}, {
    unitPrice: 800,
    quantity: 3
}, ];
let totalItem = 0;
let totalPrice = 0;


calculateTotal(cart);