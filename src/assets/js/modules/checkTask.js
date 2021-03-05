const checkTask = () => {
  taskList.addEventListener('click', (e) => {
    const parent = e.target.parentNode.parentNode;
    if (e.target && e.target.matches('input.checkbox')) {
      if (parent.classList.contains('checked')) {
        parent.classList.remove('checked');
      } else {
        parent.classList.add('checked');
      }      
    }    
  });
};

export default checkTask;