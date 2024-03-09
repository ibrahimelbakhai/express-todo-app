
const express = require('express');
let todos = [];
const app = express();
app.use(express.json());

// Get all todos
app.get('/', (req, res) => {
  res.send(todos);
});

// Create a new todo
app.post('/todo', (req, res) => {
  const { title, completed } = req.body;
  todos.push({ title, completed });
  res.status(201).send(todos);
});

// Delete a todo
app.delete('/todo:id', (req, res) => {
  const { id } = reqparams;
  todos = todos.filter((todo, index) => index != id);
  res.status(200).send(todos);
});

const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
