'use strict';

const addItem = document.querySelector('.btn-add'),
    deleteItem = document.querySelectorAll('.btn-delete'),
    inputValue = document.querySelector('#text'),
    container = document.querySelector('.container');


let taskArray = [];

let taskList = document.createElement('ul');
taskList.classList.add('task-list');
container.append(taskList);

// ----------------------------------------------------------------------------
const checkInputValue = () => {
  addItem.setAttribute('disabled', 'disabled');
  addItem.classList.add('disabled');
  inputValue.addEventListener('input', () => {    
    if (inputValue['value'] !== '') {
      addItem.removeAttribute('disabled');
      addItem.classList.remove('disabled');

    } 
  })
};
checkInputValue();

// ------------------------------------------------------------------------------

const addTask = () => {
  taskArray.push(inputValue['value']);
  inputValue['value'] = '';
  checkInputValue();

  let task = document.createElement('li');
  task.classList.add('task-list__item');

  for (let i = 0; i < taskArray.length; i++) {
      task.innerHTML = `
      <label for="check${i}">
        <input type="checkbox" name="checkbox" id="check${i}" class="checkbox">
        <span>${taskArray[i]}</span>
      </label>
      <button class="btn btn-delete">delete</button>`;
      
    }
  taskList.append(task);  
  

};

// ------------------------------------------------------------------------------------
addItem.addEventListener('click', () => {
  addTask();
}); 
inputValue.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

// -------------------------------------------------------------------------------