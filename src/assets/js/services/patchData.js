async function patchData(link, status) {
  await fetch(link, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
      // "Access-Control-Allow-Headers": "Content-Type",
      // 'Access-Control-Allow-Methods': 'PATCH, OPTIONS',
      // 'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      'status': status
    })    
  });
};

export default patchData;