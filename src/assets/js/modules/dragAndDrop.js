const dragAndDrop = (dragArea) => {
  const taskArea  = document.querySelector(dragArea);
  
  taskArea.addEventListener('dragover', (e) => {
    e.preventDefault();   
    const activeTask = taskArea.querySelector('.selected'),
          currentTask = e.target,
          nextTask = (currentTask === activeTask.nextElementSibling) ? currentTask.nextElementSibling : currentTask;
    
    if(!(activeTask != currentTask && currentTask.classList.contains('task-list__item'))) {
      return;
    }
    
    taskArea.insertBefore(activeTask, nextTask);
  });  

  taskArea.addEventListener('dragstart', (e) => {
    if(e.target && e.target.matches('li.task-list__item')) {
      e.target.classList.add('selected') 
    }
  }); 
  taskArea.addEventListener('dragend', (e) => {
    if(e.target && e.target.matches('li.task-list__item')) {
      e.target.classList.remove('selected') 
    }
  }); 
};

export default dragAndDrop;