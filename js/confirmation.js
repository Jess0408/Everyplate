// Update the total price
let price = JSON.parse(sessionStorage.getItem('totalPrice'));
document.getElementById('totalPrice').textContent = 'Total' + ' ' + '$' + ' ' + price;

// Get the information
var urlParams = new URLSearchParams(window.location.search);
       
document.getElementById('title').textContent = JSON.parse(sessionStorage.getItem('title'));
document.getElementById('surname').textContent = JSON.parse(sessionStorage.getItem('surname'));
document.getElementById('mobile').textContent = JSON.parse(sessionStorage.getItem('mobile'));
document.getElementById('home').textContent = JSON.parse(sessionStorage.getItem('home'));
document.getElementById('email').textContent = JSON.parse(sessionStorage.getItem('email'));
document.getElementById('street').textContent = JSON.parse(sessionStorage.getItem('street'));
document.getElementById('suburb').textContent = JSON.parse(sessionStorage.getItem('suburb'));
document.getElementById('postal-code').textContent = JSON.parse(sessionStorage.getItem('postal-code'));
document.getElementById('state').textContent = JSON.parse(sessionStorage.getItem('state'));
document.getElementById('card-number').textContent = JSON.parse(sessionStorage.getItem('card-number'));
document.getElementById('expiration-date').textContent = JSON.parse(sessionStorage.getItem('expiration-date'));
document.getElementById('card-name').textContent = JSON.parse(sessionStorage.getItem('card-name'));
document.getElementById('cvv').textContent = JSON.parse(sessionStorage.getItem('cvv'));

//defalt choose card button
document.addEventListener('DOMContentLoaded', function() {
    const defaultButton = document.getElementById('cardBtn');
    defaultButton.classList.add('active');
});