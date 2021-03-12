function deleteData(link) {
  const taskList = document.querySelector('.task-list');
 
  taskList.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.matches('button.btn-delete')) {
      const id = target.getAttribute('data-delete'),
            linkDelete = link.replace('.json', `/${id}.json`);
      target.parentElement.remove();       
      fetch(linkDelete, {
          method: 'DELETE'
        })
      }
  })
};

export default deleteData;