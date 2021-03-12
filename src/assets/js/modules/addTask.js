import createTasksList from './createTasksList';
import postData from '../services/postData';

const addTask = async(link, input) => { 
  const task_item = document.querySelectorAll('.task-list__item');
  const taskBody = {
    value: input['value'].trim(),
    id: null,
    status: false
  }
  if (taskBody.value !== '') {
    await postData(link, taskBody);
    task_item.forEach(task => {
      task.remove();
    });
    createTasksList(link);    
    input['value'] = '';  
    }
  else {error => console.log(error)};
};

export default addTask;