'use client'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store/store'
import {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
} from '@/redux/features/todo/todoSlice'
import todoStyles from './todoStyles'

const Home = () => {
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editInput, setEditInput] = useState('')
  const todos = useSelector((state: RootState) => state.todo.todos)
  const dispatch = useDispatch<AppDispatch>()

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input.trim()))
      setInput('')
    }
  }

  const handleEdit = (id: number, text: string) => {
    setEditingId(id)
    setEditInput(text)
  }

  const handleSaveEdit = (id: number) => {
    if (editInput.trim()) {
      dispatch(editTodo({ id, newText: editInput.trim() }))
      setEditingId(null)
      setEditInput('')
    }
  }

  return (
    <div style={todoStyles.container}>
      <h1 style={todoStyles.heading}>To-Do Manager</h1>

      <div style={todoStyles.inputsection}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo..."
          style={todoStyles.input}
        />
        <button onClick={handleAdd} style={todoStyles.button}>
          Add
        </button>
      </div>

      <div style={todoStyles.grid}>
        {/* Pending */}
        <div style={todoStyles.section}>
          <h2 style={todoStyles.sectionTitle}>Pending Todos</h2>
          <table style={todoStyles.table}>
            <thead style={todoStyles.thead}>
              <tr>
                <th style={todoStyles.thtd}>Task</th>
                <th style={todoStyles.thtd}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.filter((t) => !t.completed).map((todo) => (
                <tr key={todo.id}>
                  <td style={todoStyles.thtd}>
                    {editingId === todo.id ? (
                      <input
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                      />
                    ) : (
                      todo.text
                    )}
                  </td>
                  <td style={todoStyles.thtd}>
                    <div style={todoStyles.actions}>
                      {editingId === todo.id ? (
                        <button
                          onClick={() => handleSaveEdit(todo.id)}
                          style={todoStyles.savebtn}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(todo.id, todo.text)}
                          style={todoStyles.editbtn}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        onClick={() => dispatch(toggleComplete(todo.id))}
                        style={todoStyles.completebtn}
                      >
                        Complete
                      </button>
                      <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        style={todoStyles.deletebtn}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {todos.filter((t) => !t.completed).length === 0 && (
                <tr>
                  <td colSpan={2} style={todoStyles.notodos}>
                    No pending todos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Completed */}
        <div style={todoStyles.section}>
          <h2 style={todoStyles.sectionTitle}>Completed Todos</h2>
          <table style={todoStyles.table}>
            <thead style={todoStyles.thead}>
              <tr>
                <th style={todoStyles.thtd}>Task</th>
                <th style={todoStyles.thtd}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.filter((t) => t.completed).map((todo) => (
                <tr key={todo.id}>
                  <td style={{ ...todoStyles.thtd, ...todoStyles.todotext }}>{todo.text}</td>
                  <td style={todoStyles.thtd}>
                    <div style={todoStyles.actions}>
                      <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                        style={todoStyles.deletebtn}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {todos.filter((t) => t.completed).length === 0 && (
                <tr>
                  <td colSpan={2} style={todoStyles.notodos}>
                    No completed todos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
