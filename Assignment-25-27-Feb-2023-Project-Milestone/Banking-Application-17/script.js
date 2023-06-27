// code getting date
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = dd + "/" + mm + "/" + yyyy;
// console.log(today);

// Define a customer object with name and balance properties
const customer = {
    name: "Anoop Kumar Gupta",
    balance: 1000,

    // Function to deposit money into the account
    deposit: function(amount) {
        this.balance += amount;
        console.log(
            `Deposit of ${amount} successful. New balance: ${this.balance}`
        );
    },

    // Function to withdraw money from the account
    withdraw: function(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(
                `Withdrawal of ${amount} successful. New balance: ${this.balance}`
            );
        } else {
            console.log("Insufficient funds. Withdrawal canceled.");
        }
    },
};

// customer.deposit(5000); // Deposit $500
// customer.withdraw(200); // Withdraw $200
// customer.withdraw(1500); // Attempt to withdraw $1500 (insufficient funds)

let name_data = (document.getElementById("name_data").innerHTML = customer.name);
let amount = document.getElementById("amt");
let ul = document.getElementsByTagName("ul")[0];

function check_amt() {
    amount.innerHTML = `&#8377 ${customer.balance}`;
}

function withdraw() {
    let inputCard = document.getElementById("container");

    inputCard.innerHTML = `
    <div class="card" id="withdrawal">
        <div id="amnt-div">
            <label for="amount">Enter Amount :</label>
            <input type="number" id="input_amt" required placeholder="Enter Amount">
        </div>
        <div id="pswrd-div">
            <label for="password">Password :</label>
            <input type="password" id="password" placeholder="Enter Password" required>
        </div>
        <div id="authenticate-div">
            <span id="message">Wrong Password</span>
            <span>😒😢😣😭</span>
            <button id="authentication">Authenticate</button>
        </div>
    </div>
    `;

    function authenticate() {
        // Input Amount
        let input_amt = document.getElementById("input_amt");

        //// Password for Authen
        let pass = "Anoop@123";

        /////// Storing Password
        let password = document.getElementById("password");

        //// Variable For message
        let message = document.getElementById("message");

        if (input_amt.value > 0 && password.value == pass) {
            customer.withdraw(input_amt.value);

            // adding history
            let li = document.createElement("li");
            li.innerHTML = `
                <span id="date">${today}</span>
                <span id="debit">${input_amt.value}</span>
                <span id="credit">-</span>
                <span id="availB">${customer.balance}</span>
            `;

            ul.appendChild(li);
            localStorage.setItem("ul", JSON.stringify(ul));

            input_amt.value = '';
            password.value = '';
            message.innerHTML = '';


        } else if (input_amt.value <= 0) {
            message.style.visibility = "visible";
            message.innerHTML = "Please Enter valid amount";
        } else if (password.value != pass) {
            message.style.visibility = "visible";
            message.innerHTML = "Wrong Password";
        } else {
            message.style.visibility = "visible";
            message.innerHTML = "Some Went wrong Please Contact Branch";
        }



        check_amt();


        setTimeout(() => { inputCard.innerHTML = ''; }, 2000);
    }

    document.getElementById("authentication").addEventListener("click", authenticate);
}

////// Deposit


function deposit() {
    let inputCard = document.getElementById("container");

    inputCard.innerHTML = `
    <div class="card" id="deposit">
        <div id="amnt-div">
            <label for="amount">Enter Amount :</label>
            <input type="number" id="input_amt" placeholder="Enter Amount" required>
        </div>
        <div id="pswrd-div">
            <label for="password">Password :</label>
            <input type="password" id="password" placeholder="Enter Password" required>
        </div>
        <div id="authenticate-div">
            <span id="message">Wrong Password</span>
            <span>😊😍😘💖</span>
            <button id="authentication">Authenticate</button>
        </div>
    </div>
    `;

    // Input Amount
    let input_amt = document.getElementById("input_amt");

    //// Password for Authen
    let pass = "Anoop@123";

    /////// Storing Password
    let password = document.getElementById("password");

    //// Variable For message
    let message = document.getElementById("message");



    function authenticate() {
        if (input_amt.value > 0 && password.value == pass) {
            customer.deposit(parseFloat(input_amt.value));

            // adding history
            let li = document.createElement("li");
            li.innerHTML = `
                <span id="date">${today}</span>
                <span id="debit">-</span>
                <span id="credit">${input_amt.value}</span>
                <span id="availB">${customer.balance}</span>
            `;
            ul.appendChild(li);

            // Storing LocalStorage
            localStorage.setItem("ul", JSON.stringify(ul));


            input_amt.value = '';
            password.value = '';
            message.innerHTML = '';

        } else if (input_amt.value <= 0) {
            message.style.visibility = "visible";
            message.innerHTML = "Please Enter valid amount";
            console.log("Anoop");
        } else if (password.value != pass) {
            message.style.visibility = "visible";
            message.innerHTML = "Wrong Password";
            console.log("Anoop");
        } else {
            message.style.visibility = "visible";
            message.innerHTML = "Some Went wrong Please Contact Branch";
        }



        check_amt();

        setTimeout(() => { inputCard.innerHTML = ''; }, 2000);
    }

    document.getElementById("authentication").addEventListener("click", authenticate);
}

// Checking Balance
document.getElementsByTagName("button")[0].addEventListener("click", check_amt);

// Widrawl call function
document.getElementsByTagName("button")[1].addEventListener("click", withdraw);

// deposit call function
document.getElementsByTagName("button")[2].addEventListener("click", deposit);