import checkTask from './modules/checkTask';
import createTasksList from './modules/createTasksList';
import dragAndDrop from './modules/dragAndDrop';
import taskCalls from './modules/taskCalls';
import toggleTheme from './modules/toggleTheme';
import deleteData from './services/deleteData';

const link = 'https://to-do-list-573d3-default-rtdb.firebaseio.com/data.json';
createTasksList(link); 

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  taskCalls('.btn-add', link, '#text');
  deleteData(link);
  checkTask(link, '.task-list');
  dragAndDrop('.task-list');
  toggleTheme('.toggle-theme', 'body');
});