async function patchData(link, status) {
  await fetch(link, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'status': status
    })    
  });
};

export default patchData;