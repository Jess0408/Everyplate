let price = JSON.parse(sessionStorage.getItem('totalPrice'))
console.log(price);
document.getElementById('totalPrice').textContent = '$' + ' ' + price;
document.getElementById('planPrice').textContent = 'Total' + ' ' + '$' + ' ' + price

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

//click input, then the placeholder disappear
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

//get value of input
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
  var cardNumber = document.getElementById('card-number').value;
  var expiration = document.getElementById('expiration-date').value;
  var cardName = document.getElementById('card-name').value;
  var cvv = document.getElementById('cvv').value;

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
  params.append('card-number', cardNumber);
  params.append('expiration-date', expiration);
  params.append('card-name', cardName);
  params.append('cvv', cvv);

  //content can not be empty
  for (let i = 0; i < input_length; i++) {
    var content = document.getElementsByTagName('input')[i].value;
    if (content != null) {
      window.location.href = 'confirmation.html?' + params.toString();
    }
  }
}

//defalt choose card button
document.addEventListener('DOMContentLoaded', function() {
  const defaultButton = document.getElementById('cardBtn');
  defaultButton.classList.add('active');

  const buttons = document.querySelectorAll('.payment-info button');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
      });
  });
});