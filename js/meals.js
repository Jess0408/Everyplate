
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

// Small screen change day
var left = document.getElementById('left');
var right = document.getElementById('right');

left.onclick = function () {
  document.getElementById('day-small').textContent = 'Day 1';
}

right.onclick = function () {
  document.getElementById('day-small').textContent = 'Day 2';
}

// Small screen nav
document.getElementById('expand').onclick = function () {
  document.getElementById('large-nav').style.display = 'block';
  document.getElementById('small-nav').style.display = 'none';
}

document.getElementById('collapse').onclick = function () {
  document.getElementById('large-nav').style.display = 'none';
  document.getElementById('small-nav').style.display = 'block';
}

// Change button onclick

var change = document.getElementById('change-btn');
change.onclick = function () {
  window.location.href = 'check_menu.html';
}