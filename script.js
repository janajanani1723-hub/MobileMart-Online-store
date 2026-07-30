function shopNow() {
alert("Welcome to MobileMart Store Explore the latest smartphones Happy Shopping ");
}
function searchPhone() {
let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
if (title.includes(input)) {
cards[i].style.display = "block";
} else {
cards[i].style.display = "none";
}
}
}
let count = 0;
function addToCart() {
count++;
document.getElementById("cartCount").innerText = count;
alert("Product added to cart!");
}
function buynow(){
    document.getElementById("buyMessage").style.display = "block";
        setTimeout(function(){
        document.getElementById("buyMessage").style.display = "none";
    },10000);
}
function showDetails(name, price, ram, storage) {
    document.getElementById("details").innerHTML =
    "<h2>" + name + "</h2>" +
    "<p>Price: " + price + "</p>" +
    "<p>" + ram + "</p>" +
    "<p>" + storage + "</p>";
}
function sendMessage() {
    document.getElementById("contactMessage").innerHTML =
    "✅ Your message has been sent successfully!";
}
function changeQuantity(qtyId, totalId, price, change) {
    let qtyElement = document.getElementById(qtyId);
    let totalElement = document.getElementById(totalId);
        let qty = parseInt(qtyElement.innerText); 
    qty = qty + change; 
          if(qty < 1) {
        qty = 1;
    }
        qtyElement.innerText = qty;
    totalElement.innerText = qty * price; 
}
function addWishlist(button) {

    if (button.innerText == "🤍 Wishlist") {
        button.innerText = "❤️ Added";
    } else {
        button.innerText = "🤍 Wishlist";
    }
}
function checkout() {
    let orderId = "MM" + Math.floor(Math.random() * 1000000);
    localStorage.setItem("orderId", orderId);
    localStorage.setItem("custName", "Janani");
    localStorage.setItem("items", count);
    localStorage.setItem("total","0");
    window.location.href = "success.html";
}
function placeOrder() {
    window.location.href = "success.html";
}