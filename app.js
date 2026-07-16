const button = document.getElementById('actionButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Эффект сработал! Сайт выглядит отлично.';
  message.style.color = '#93c5fd';
});
