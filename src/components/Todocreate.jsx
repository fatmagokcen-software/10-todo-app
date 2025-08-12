import React, { useState } from 'react'
import '../App.css';


function Todocreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');
    const clearInput = () => {
        setNewTodo('');

    }


    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 99999),
            content: newTodo
        };
        onCreateTodo(request);
        clearInput();

    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type='text' placeholder='todo giriniz' />
            <button onClick={createTodo} className='todo-button'> Todo oluştur</button>


        </div>
    )
}

export default Todocreate
