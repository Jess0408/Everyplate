// Update the total price
let price = JSON.parse(sessionStorage.getItem('totalPrice'));
document.getElementById('totalPrice').textContent = '$' + ' ' + price;
document.getElementById('planPrice').textContent = 'Total' + ' ' + '$' + ' ' + price;

// Get the modal
var modal = document.getElementById('id01');
var home_icon = document.getElementsByClassName('menu-icon')[0];
var nextBtn = document.getElementById('nextBtn');
let contentFilled = false;

home_icon.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//click input, then the placeholder disappear
let input_length = document.getElementsByTagName('input').length;

for (let i = 0; i < input_length; i++) {
  const input = document.getElementsByTagName('input')[i];
  const originalPlaceholder = input.placeholder;

  input.addEventListener('focus', function () {
    this.placeholder = '';
  });

  input.addEventListener('blur', function () {
    this.placeholder = originalPlaceholder;
  });
}

//get value of input
function saveData() {
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

  // check if the value are not null
  if (!title || !surname || !mobile || !home || !email || !street || !suburb || !postalCode || !state || !cardNumber || !cardName || !expiration || !cvv) {
    alert('Please fill all the information.');
    return;
  }else if (mobile.length != 10) {
    alert('Please fill the mobile number correctly.');
    return;
  }else if (postalCode.length != 4) {
    alert('Please fill the post code correctly.');
    return;
  }else if (cardNumber != 16) {
    alert('Please fill the card number correctly.');
    return;
  }else if (cvv != 3) {
    alert('Please fill the cvv correctly.');
    return;
  } else {
    contentFilled = true;
  }

  var params = new URLSearchParams();
  sessionStorage.setItem('title', JSON.stringify(title));
  sessionStorage.setItem('surname', JSON.stringify(surname));
  sessionStorage.setItem('mobile', JSON.stringify(mobile));
  sessionStorage.setItem('home', JSON.stringify(home));
  sessionStorage.setItem('email', JSON.stringify(email));
  sessionStorage.setItem('street', JSON.stringify(street));
  sessionStorage.setItem('suburb', JSON.stringify(suburb));
  sessionStorage.setItem('postal-code', JSON.stringify(postalCode));
  sessionStorage.setItem('state', JSON.stringify(state));
  sessionStorage.setItem('card-number', JSON.stringify(cardNumber));
  sessionStorage.setItem('expiration-date', JSON.stringify(expiration));
  sessionStorage.setItem('card-name', JSON.stringify(cardName));
  sessionStorage.setItem('cvv', JSON.stringify(cvv));
}

// Check user click the time-plot
nextBtn.addEventListener('click', () => {
  saveData();
  if (contentFilled) {
    window.location.href = 'confirmation.html';
  }
});

//defalt choose card button
document.addEventListener('DOMContentLoaded', function () {
  const defaultButton = document.getElementById('cardBtn');
  defaultButton.classList.add('active');

  const buttons = document.querySelectorAll('.payment-info button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
});