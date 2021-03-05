const addTaskList = () => {
  const addTask = () => {
    taskArray.push({
      value: inputValue['value'],
      id: Math.random()
    });
    inputValue['value'] = '';
    checkInputValue();
  
    let task = document.createElement('li');
    task.classList.add('task-list__item');
  
    for (let i = 0; i < taskArray.length; i++) {
        task.innerHTML = `
        <label for="${taskArray[i].id}">
          <input type="checkbox" name="checkbox" id="${taskArray[i].id}" class="checkbox">
          <span>${taskArray[i].value}</span>
        </label>
        <button data-delete="${taskArray[i].id}" class="btn btn-delete">delete</button>`;     
      }
    taskList.append(task);  
  };
  addItem.addEventListener('click', () => {
    addTask();
  }); 
  inputValue.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && inputValue['value'] !== '') {
      checkInputValue();
      addTask();
    }
  });
};

export default addTaskList;
