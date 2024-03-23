//CART
let cartIcon = document.getElementById("logo");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");
//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active")
};
//Close Cart
cartIcon.onclick = () => {
    cart.classList.remove("active")
};