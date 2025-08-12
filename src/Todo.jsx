import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";





function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    // state tanımladım
    const [editTable, seteditTable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    // remove için func. oluşturdum
    const removeTodo = () => {
        onRemoveTodo(id);
    };

    // update için func. oluşturdum
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        };
        onUpdateTodo(request);
        seteditTable(false);
    };

    return (
        <div className='main'>
            <div style={{
                display: 'flex',
                gap: '12px',
                fontSize: '18px',
                cursor: 'pointer',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {
                    editTable ? (
                        <input
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            style={{ width: `100%` }}
                            className='todo-input'
                            type='text'
                        />
                    ) : (
                        <span style={{ fontSize: '16px' }}>{content}</span>
                    )
                }

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <IoIosRemoveCircle onClick={removeTodo} />
                    {
                        editTable ? <FaCheck onClick={updateTodo} />

                            : <FaEdit onClick={() => seteditTable(true)} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo;
