import patchData from '../services/patchData';

const checkTask = (link) => {
  const taskList = document.querySelector('.task-list');
 
  taskList.addEventListener('click', (e) => {
    const parent = e.target.parentElement.parentElement;
    if (e.target && e.target.matches('input.checkbox')) {
      const id = e.target.getAttribute('id'),
            status = e.target.getAttribute('data-checked'),
            linkToCheck = link.replace('.json', `/${id}.json`);
      if (parent.classList.contains('checked')) {
        parent.classList.remove('checked');
        patchData(linkToCheck, false);
        console.log(status);        
      } else {
        parent.classList.add('checked');
        patchData(linkToCheck, true);
        console.log(status);             
      }
    }
  });
};

export default checkTask;