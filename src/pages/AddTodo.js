import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoContext from '../context/TodoContext';

function AddTodo() {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), text } });
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Digite sua tarefa"
        />
        <button type="submit" style={{ marginLeft: '10px' }}>Adicionar</button>
      </form>
    </div>
  );
}

export default AddTodo;
