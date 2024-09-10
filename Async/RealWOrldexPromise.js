fetch('https://api.example.com/data')
  .then(response => response.json())  // On success
  .then(data => console.log(data))     // Data received
  .catch(error => console.error('Error:', error)); 