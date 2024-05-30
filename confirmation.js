var urlParams = new URLSearchParams(window.location.search);

        
document.getElementById('title').textContent = urlParams.get('title');
document.getElementById('surname').textContent = urlParams.get('surname');
document.getElementById('mobile').textContent = urlParams.get('mobile');
document.getElementById('street').textContent = urlParams.get('street');
document.getElementById('suburb').textContent = urlParams.get('suburb');
document.getElementById('postal-code').textContent = urlParams.get('postalCode');
document.getElementById('state').textContent = urlParams.get('state');