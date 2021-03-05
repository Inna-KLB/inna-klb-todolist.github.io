const deleteTask = () => {
  taskList.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('button.btn-delete')) {
      const id = target.getAttribute('data-delete');
      target.parentElement.remove();   
      taskArray = taskArray.filter(task => task.id !== +id);        
    }
  });
};

export default deleteTask;