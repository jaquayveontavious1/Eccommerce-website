//CART
let cartIcon = document.getElementById("logo");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active")
};
//Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active")
};



//Making Functions
//Remove Items from the cart
function remove() {
    let removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for(let i = 0; i < removeCartButtons.length; i++) {
        

    }


}