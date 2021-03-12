const checkInputValue = (btn, input) => {
  btn.setAttribute('disabled', 'disabled');
  btn.classList.add('disabled');
  input.addEventListener('input', () => {    
    if (input['value'] !== '') {
      btn.removeAttribute('disabled');
      btn.classList.remove('disabled');
    }     
  })
};

export default checkInputValue;