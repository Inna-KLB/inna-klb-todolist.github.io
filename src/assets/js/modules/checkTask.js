import patchData from '../services/patchData';
import taskToDown from './taskToDown';
import taskToUp from './taskToUp';

const checkTask = (link, selector) => {
  const taskList = document.querySelector(selector);
 
  taskList.addEventListener('click', (e) => {
    const parent = e.target.parentElement.parentElement;

    if (e.target && e.target.matches('input.checkbox')) {
      const id = e.target.getAttribute('id'),
            linkToCheck = link.replace('.json', `/${id}.json`);
      if (parent.classList.contains('checked')) {
        parent.classList.remove('checked');
        patchData(linkToCheck, false);  
        taskToUp(parent);   
      } else {
        parent.classList.add('checked');
        patchData(linkToCheck, true);  
        taskToDown(parent);         
      }
    }
  });
};

export default checkTask;