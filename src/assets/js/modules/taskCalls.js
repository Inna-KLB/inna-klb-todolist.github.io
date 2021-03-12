import addTask from './addTask';
import checkInputValue from './checkInputValue';


const taskCalls = (btn, link, input) => {
  const taskInput = document.querySelector(input),
        addBtn = document.querySelector(btn);

  checkInputValue(addBtn, taskInput);
    
  addBtn.addEventListener('click', () => {  
    addTask(link, taskInput);
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && taskInput['value'] !== '') {  
      addTask(link, taskInput);
      checkInputValue(addBtn, taskInput);
    }
  }); 
 
};

export default taskCalls;