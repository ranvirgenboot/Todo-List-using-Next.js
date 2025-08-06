
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false })
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload)
      if (todo) todo.completed = true
    },
    editTodo: (state, action: PayloadAction<{ id: number; newText: string }>) => {
      const todo = state.todos.find((t) => t.id === action.payload.id)
      if (todo) todo.text = action.payload.newText
    },
  },
})

export const { addTodo, removeTodo, toggleComplete, editTodo } = todoSlice.actions
export default todoSlice.reducer
