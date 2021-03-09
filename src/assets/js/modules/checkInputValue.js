const checkInputValue = (btn, input) => {
  const addItem = document.querySelector(btn),
  inputValue = document.querySelector(input);

  addItem.setAttribute('disabled', 'disabled');
  addItem.classList.add('disabled');
  inputValue.addEventListener('input', () => {    
    if (inputValue['value'] !== '') {
      addItem.removeAttribute('disabled');
      addItem.classList.remove('disabled');
    }     
  })
};

export default checkInputValue;