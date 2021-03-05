import checkTask from './modules/checkTask';
import checkInputValue from './modules/checkInputValue';
import deleteTask from './modules/deleteTask';
import addTaskList from './modules/addTaskList';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const addItem = document.querySelector('.btn-add'),
  inputValue = document.querySelector('#text'),
  taskList = document.createElement('ul'),
  container = document.querySelector('.container');

  let taskArray = [];

  taskList.classList.add('task-list');
  container.append(taskList);

  addTaskList();
  checkInputValue();
  checkTask();
  deleteTask(); 
});

