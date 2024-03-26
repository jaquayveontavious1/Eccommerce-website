
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


//Remove Items from the Cart
let removeCartItems = document.getElementsByClassName("cart-remove");
console.log(removeCartItems);
for(i = 0; i < removeCartItems.length; i++) {
    let removeButton = removeCartItems[i];
    removeButton.addEventListener("click", function (event) {
        let removeButtonClicked = event.target;
        removeButtonClicked.parentElement.remove();
        updateCartTotal()
    })
}
let cartContent = document.getElementsByClassName("cart-content")[0];
let cartItems = cartContent.getElementsByClassName("cart-items")[0];
let total = 0;
function updateCartTotal () {
  
   for(i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];
    let priceElement = cartItem.getElementsByClassName("cart-product-price")[0];
    let quantityElement = cartItem.getElementsByClassName("cart-quantity")[0];
    let quantity = quantityElement.value;
    let price = parseFloat(priceElement.innerText.replace("$", ""))
    let total = total + (price * quantity);
  




   }
   document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
//Quantity Changes
let quantityInputs = document.getElementsByClassName("cart-quantity")
for (i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("click",quantityChanged)
}
function quantityChanged(event) {
    let input = event.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}
let addToCart = document.getElementsByClassName("add-cart")
for(i = 0; i < addToCart.length; i++) {
    let button = addToCart[0];
    button.addEventListener("click", addToCartClicked);
}
function addToCartClicked(event) {
    let button = event.target;
    let cartContent = button.parentElement.parentElement()
    let image = cartContent.getElementsByClassName("product-image");
    let title = cartContent.getElementsByClassName("product-title")
    let Itemprice = cartContent.getElementsByClassName("product-price")
    console.log(title)



}
// // //Quantity Changes
// let quantityInputs = document.getElementsByClassName("cart-quantity")
// for(i = 0; i < quantityInputs.length; i++) {
//     let input = quantityInputs[i];
//      input.addEventListener("click", quantityChanged);
// }
// function quantityChanged (event) {
//     let input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//     }
//     updateTotal();

// }

// let addCart = document.getElementsByClassName("add-cart");
