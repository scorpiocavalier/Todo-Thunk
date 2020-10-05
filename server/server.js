import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { v4 as uuidv4 } from 'uuid'

import { initialTodos } from './data'
let todos = [ ...initialTodos ]

const app = express()

app.use(bodyParser.json())
app.use(cors())

// The route for getting all todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

// The route for getting all todos w/ delay time
app.get('/todos-delay', (req, res) => {
  setTimeout(() => res.status(200).json(todos), 1000)
})

// The route for creating new todos
app.post('/todos', (req, res) => {
  const { text } = req.body
  if (text) {
    const newTodo = {
      id: uuidv4(),
      createdAt: new Date(Date.now()),
      isCompleted: false,
      text,
    }
    todos.push(newTodo)
    res.status(200).json(newTodo)
  } else {
    res.status(400).json({ message: 'Could not post new todo.' })
  }
})

// The route for updating todo as completed
app.post('/todos/:id/completed', (req, res) => {
  const { id } = req.params
  const matchingTodo = todos.find(todo => todo.id === id)
  const updatedTodo = { ...matchingTodo, isCompleted: true }

  if (matchingTodo) {
    todos = todos.map(todo => todo.id === id ? updatedTodo : todo)
    console.log('todos', todos)
    res.status(200).json(updatedTodo)
  } else {
    res.status(400).json({ message: 'Could not update todo.' })
  }
})

// The route for deleting a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params
  const removedTodo = todos.find(todo => todo.id === id)
  todos = todos.filter(todo => todo.id !== id)
  res.status(200).json(removedTodo)
})

app.listen(8080, () => console.log('Server is on port 8080'))