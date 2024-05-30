// Get the modal
var modal = document.getElementById('id01');

var home_icon = document.getElementsByClassName('menu-icon')[0];

home_icon.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let input_length = document.getElementsByTagName('input').length;

for (let i = 0; i < input_length; i++){
  const input = document.getElementsByTagName('input')[i];
  const originalPlaceholder = input.placeholder;

  input.addEventListener('focus', function() {
    this.placeholder = '';
  });

  input.addEventListener('blur', function() {
    this.placeholder = originalPlaceholder;
  });
}

function saveDataAndRedirect() {
  var title = document.getElementById('title').value;
  var surname = document.getElementById('surname').value;
  var mobile = document.getElementById('mobile').value;
  var home = document.getElementById('home').value;
  var email = document.getElementById('email').value;
  var street = document.getElementById('street').value;
  var suburb = document.getElementById('suburb').value;
  var postalCode = document.getElementById('postal-code').value;
  var state = document.getElementById('state').value;

  var params = new URLSearchParams();
  params.append('title', title);
  params.append('surname', surname);
  params.append('mobile', mobile);
  params.append('home', home);
  params.append('email', email);
  params.append('street', street);
  params.append('suburb', suburb);
  params.append('postalCode', postalCode);
  params.append('state', state);

  window.location.href = 'confirmation.html?' + params.toString();
}