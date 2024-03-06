document.addEventListener('DOMContentLoaded', () => {
  const usernameForm = document.getElementById('usernameForm');
  const usernameInput = document.getElementById('usernameInput');
  const submitButton = document.getElementById('submitButton');
  const usernameOutput = document.getElementById('usernameOutput');

  usernameOutput.textContent = `Guest`;

  submitButton.addEventListener('click', () => {
    usernameOutput.textContent = `Hello, ${usernameInput.value}!`;
  });
});