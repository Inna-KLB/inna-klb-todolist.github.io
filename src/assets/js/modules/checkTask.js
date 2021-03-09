const checkTask = (ulList, taskArray, isChecked) => {
  const taskList = document.querySelector(ulList);
  taskList.addEventListener('click', (e) => {
    const parent = e.target.parentNode.parentNode;
    isChecked = !isChecked;
    if (e.target && e.target.matches('input.checkbox')) { 
      if (!isChecked) {
        parent.classList.remove('checked');
      } else {
        parent.classList.add('checked');
      }  
      console.log('checked', isChecked);     
      console.log(taskArray);              
    }    
  });
};

export default checkTask;