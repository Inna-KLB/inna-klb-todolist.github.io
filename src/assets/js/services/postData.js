async function postData(link, task) {
  await fetch(link, {
    method: 'POST',
    cors: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })    
}

export default postData;