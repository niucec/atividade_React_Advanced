import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';

function Home() {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Minhas Tarefas</h1>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
              style={{ marginLeft: '10px' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <Link to="/add">Adicionar Tarefa</Link>
    </div>
  );
}

export default Home;
