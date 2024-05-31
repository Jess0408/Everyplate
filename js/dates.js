// Get the modal
var modal = document.getElementById('id01');
var home_icon = document.getElementsByClassName('menu-icon')[0];
var cart_icon = document.getElementById('shoppingCart');
var cart = document.getElementById('cart');
var nextBtn = document.getElementById('nextBtn');
let total = 0;
let contentClicked = false;

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

  if (event.target == cart) {
    cart.style.display = "none";
  }
}

//defalt select date and time
document.addEventListener("DOMContentLoaded", function () {
  updateDateOptions();
  document.querySelector('.date-option[data-date="today"]').click();
  document.getElementById('morningBtn').click();
});

// Get the date
function updateDateOptions() {
  const dateOptions = document.querySelectorAll('.date-option');
  for (let i = 0; i < dateOptions.length; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const dateString = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    const dayString = date.toLocaleDateString('en-US', { weekday: 'short' });
    dateOptions[i].querySelector('.day').textContent = dayString;
    dateOptions[i].querySelector('p:nth-child(2)').textContent = `${dateString} ${dayString}`;
  }
}

// Update the date
document.querySelectorAll('.date-option').forEach(option => {
  option.addEventListener('click', function () {
    document.querySelectorAll('.date-option').forEach(other => {
      other.classList.remove('active');
    });
    this.classList.add('active');
    var timePeriod = document.querySelector('.time-option.active').id.replace('Btn', ''); // morning, afternoon, evening
    showTimePeriod(timePeriod);
  });
});

// Time option change listen
document.querySelectorAll('.time-option').forEach(option => {
  option.addEventListener('click', function () {
    document.querySelectorAll('.time-option').forEach(other => {
      other.classList.remove('active');
    });
    this.classList.add('active');
    var timePeriod = this.id.replace('Btn', ''); // morning, afternoon, evening
    showTimePeriod(timePeriod);
  });
});

// Time option button
function showTimePeriod(timePeriod) {
  document.querySelectorAll('.morning, .afternoon, .evening').forEach(element => {
    element.style.display = 'none';
  });
  document.querySelector('.' + timePeriod).style.display = 'block';
}

// Time-plot selected time-slot changed
document.querySelectorAll('.time-slot').forEach(slot => {
  slot.addEventListener('click', function () {
    document.querySelectorAll('.time-slot').forEach(s => {
      s.classList.remove('active');
    });
    this.classList.add('active');
    updateTotalPrice(this.dataset.price);
    contentClicked = true;
  });
});

// Check user click the time-plot
nextBtn.addEventListener('click', () => {
  if (contentClicked) {
    window.location.href = 'payment.html';
  }
});

// Count total price
function updateTotalPrice(price) {
  price = Number(price) + Number(document.getElementById('totalPrice').dataset.price);
  total = price;
  saveData();
  document.getElementById('totalPrice').textContent = '$' + ' ' + price;
}

// Store price for next page
function saveData() {
  sessionStorage.setItem('totalPrice', JSON.stringify(total));
}

