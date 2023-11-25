import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    handleComplete(state, action) {
      const handleComplete = state.todos.find(
        (item) => item.id === action.payload.id
      );
      handleComplete.completed = !handleComplete.completed;
    },
  },
});

export const { addTodo, removeTodo, handleComplete } = todoSlice.actions;

export default todoSlice.reducer;
