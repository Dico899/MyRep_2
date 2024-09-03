// Get the h1 element and the input field
const h1Element = document.querySelector('h1');
const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Inserisci nuovo testo';

// Add the input field to the page
document.body.appendChild(inputField);

// Add an event listener to the input field
inputField.addEventListener('input', (e) => {
  // Get the new text from the input field
  const newText = e.target.value;

  // Update the h1 element with the new text
  h1Element.textContent = newText;
});