const taskToUp = (task) => {
  let prevTask;
  const intervalId = setInterval(() => {
    prevTask = task.previousElementSibling;
    if(prevTask) {
      prevTask.classList.contains('checked') ? task.after(prevTask) : clearInterval(intervalId);
    } else {
      clearInterval(intervalId);  
    }
  }, 200);
};

export default taskToUp;