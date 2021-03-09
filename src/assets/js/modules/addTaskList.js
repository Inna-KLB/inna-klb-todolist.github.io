import checkInputValue from './checkInputValue';

const addTaskList = (btn, input, ulList, taskArray, isChecked) => {
  const addItem = document.querySelector(btn),
  inputValue = document.querySelector(input),
  taskList = document.createElement(ulList),
  container = document.querySelector('.container');
  
  taskList.classList.add('task-list');
  container.append(taskList);

  
  async function addTask(){
    const responce = await fetch('https://to-do-list-573d3-default-rtdb.firebaseio.com/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: inputValue['value'],
        status: isChecked
      })
    }) 
    const data = await responce.json();
    console.log(data);
    
    taskArray.push({
      value: inputValue['value'],
      id: data.name,
      status: isChecked
    });
    inputValue['value'] = '';
    console.log(taskArray);
    

    // taskArray.push({
    //   value: inputValue['value'],
    //   id: Math.random(),
    //   isChecked: false
    // });
    // console.log(taskArray);
    
    // inputValue['value'] = '';

    checkInputValue(btn, input);
  
    let task = document.createElement('li');
    task.classList.add('task-list__item');
  
    for (let i = 0; i < taskArray.length; i++) {
        task.innerHTML = `
        <label for="${taskArray[i].id}">
          <input type="checkbox" data-checked="${taskArray[i].status}" name="checkbox" id="${taskArray[i].id}" class="checkbox">
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
      checkInputValue(btn, input);
      addTask();
    }
  });
}
export default addTaskList;