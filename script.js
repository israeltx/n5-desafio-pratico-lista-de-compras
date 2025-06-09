const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.getElementById('new-item-input');
const fieldset = document.querySelector('fieldset');


// Submit button functionality
form.addEventListener('submit', (event) => {
  // Stop the submit button from refreshing the page
  event.preventDefault();
  // Get the value from the input
  const value = input.value;

  if (value != '') {
    // Create elements
    const div = document.createElement('div');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const custom_checkbox_span = document.createElement('span');
    const custom_checkbox_img = document.createElement('img');
    const new_item_span = document.createElement('span');
    const trash_can_img = document.createElement('img');

    // Add classes to created elements
    div.classList.add('field');
    custom_checkbox_span.classList.add('custom-checkbox');
    new_item_span.classList.add('item-text');

    // Add sources to images
    custom_checkbox_img.src = 'assets/icons/check-white.svg';
    trash_can_img.src = 'assets/icons/trash-can.svg';

    // Add type attribute to the input
    checkbox.type = 'checkbox';
    
    // Append elements to the parents
    custom_checkbox_span.appendChild(custom_checkbox_img);
    label.appendChild(checkbox);
    label.appendChild(custom_checkbox_span);
    label.appendChild(new_item_span);
    div.appendChild(label);
    div.appendChild(trash_can_img);
    fieldset.appendChild(div);

    // Set the new item span content to the input value
    new_item_span.innerText = value;

    // Reset input after addition
    input.value = '';
  }
});