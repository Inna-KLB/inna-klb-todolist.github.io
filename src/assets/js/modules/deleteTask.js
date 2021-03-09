async function deleteTask(ulList, taskArray) {
  const taskList = document.querySelector(ulList);
  await taskList.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('button.btn-delete')) {
      const id = target.getAttribute('data-delete');
      target.parentElement.remove();   
      
      fetch(`https://to-do-list-573d3-default-rtdb.firebaseio.com/data/${id}.json`, {
        method: 'DELETE'
      })
      taskArray = taskArray.filter(task => task.id !== id);                
    }
  });
};

export default deleteTask;