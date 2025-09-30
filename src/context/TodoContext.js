import React, { createContext, useReducer } from 'react';

const TodoContext = createContext();

const initialState = { todos: [] };

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
