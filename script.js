const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.getElementById('new-item-input');
const fieldset = document.querySelector('fieldset');
const delete_btn = document.getElementsByClassName('delete');

form.addEventListener('submit', (event) => {
  // Stop the submit button from refreshing the page
  event.preventDefault();

  // Get the value from the input
  const value = input.value;

  // Create div and add the 'field' class
  const div = document.createElement('div');
  div.classList.add('field')

  // If the input is not empty, create the item and add the value from input
  if (value != '') {
    div.innerHTML = `
      <label>
        <input type="checkbox"/>
        <span class="custom-checkbox">
          <img src="assets/icons/check-white.svg" alt="">
        </span>
        <span class="item-text">${value}</span>
      </label>   
      <img src="assets/icons/trash-can.svg" alt="" class="delete">`;
  
    fieldset.appendChild(div)

    // Reset input after addition
    input.value = '';
  }
});


const alert = document.querySelector('.alert');

document.addEventListener('click', function (event) {
  // Verifica se clicou em uma imagem com a classe 'delete'
  const trashIcon = event.target.closest('.delete');
  if (trashIcon) {
    const fieldDiv = trashIcon.closest('.field');
    if (fieldDiv) {
      fieldDiv.remove();
    }
    alert.classList.remove('hide')
    // Set timer to remove the alert from the screen
    setTimeout( () => {
      alert.classList.add('hide')
    }, '2000')
  }
});