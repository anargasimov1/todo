
const button = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    message.textContent = "Salam! Bu JavaScript ilə göstərilmiş mesajdır.";
});
