const api="https://dummyjson.com/products"

fetch(api)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));