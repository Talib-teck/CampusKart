
let cartCount = 0;

function addToCart() {
    cartCount++;

    document.querySelector(".cart").innerHTML =
        "🛒 Cart (" + cartCount + ")";

    alert("Product added to cart!");
}
