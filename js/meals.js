
// Get the modal
var modal = document.getElementById('id01');
var home_icon = document.getElementsByClassName('menu-icon')[0];
var cart_icon = document.getElementById('shoppingCart');
var p = document.getElementsByClassName('preference')[0];
var cart = document.getElementById('cart');

home_icon.onclick = function () {
  modal.style.display = "block";
}

cart_icon.onclick = function () {
  cart.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == p) {
    p.style.display = "none";
  }

  if (event.target == cart) {
    cart.style.display = "none";
    cart.classList.remove('show');
  }
}