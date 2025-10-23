import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const newTodo = new Todo({ text: req.body.text });
  await newTodo.save();
  res.json(newTodo);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
};
