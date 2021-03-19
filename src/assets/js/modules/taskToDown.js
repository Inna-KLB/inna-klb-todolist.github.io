const taskToDown = (task) => {
  let nextTask;

  const intervalId = setInterval(() => {
    nextTask = task.nextElementSibling;
    if(nextTask) {
      !nextTask.classList.contains('checked') ? task.before(nextTask) : clearInterval(intervalId);
    } else {
      clearInterval(intervalId);  
    }
  }, 200);
};

export default taskToDown;