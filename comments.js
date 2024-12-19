// Create web server
// 1. require express
// 2. create an express app
// 3. create a route for the homepage that says "Welcome to the homepage"
// 4. create a route for /comments that returns a list of comments
// 5. start the server on port 3000
// 6. test the server in the browser

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});

app.get('/comments', (req, res) => {
  res.send('List of comments');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});