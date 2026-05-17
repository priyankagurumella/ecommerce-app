let cart = [];
let total = 0;

function register() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (!username || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);

    alert("Registration Successful!");
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");
    let role = localStorage.getItem("role");

    if (email === savedEmail && password === savedPassword) {

        alert("Login Successful!");

        document.getElementById("auth-section").style.display = "none";
        document.getElementById("store-section").style.display = "block";

        document.getElementById("welcome-role").innerText =
            "Logged in as: " + role;

    } else {
        alert("Invalid Email or Password");
    }
}

function addToCart(product, price) {

    cart.push({ product, price });

    total += price;

    let li = document.createElement("li");
    li.innerText = `${product} - ₹${price}`;

    document.getElementById("cart-items").appendChild(li);

    document.getElementById("total-price").innerText =
        `Total: ₹${total}`;

    alert(product + " added to cart!");
}

function checkout() {

    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    alert("Order placed successfully!");

    cart = [];
    total = 0;

    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total-price").innerText =
        "Total: ₹0";
}