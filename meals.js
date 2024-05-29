
// Get the modal
var modal = document.getElementById('id01');
var home_icon = document.getElementsByClassName('menu-icon');

home_icon.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var p = document.getElementsByClassName('preference');

window.onclick = function(event) {
  if (event.target == p) {
    p.style.display = "none";
  }
}