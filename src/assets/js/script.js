import checkTask from './modules/checkTask';
import checkInputValue from './modules/checkInputValue';
import deleteTask from './modules/deleteTask';
import addTaskList from './modules/addTaskList';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  let taskArray = [];
  let isChecked = false;


  addTaskList('.btn-add', '#text', 'ul', taskArray, isChecked);
  checkInputValue('.btn-add', '#text');
  checkTask('ul', taskArray, isChecked);
  deleteTask('ul', taskArray); 
});

