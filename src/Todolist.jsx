import React from 'react'
import Todo from './Todo'

function Todolist({ todos, onRemoveTodo, onUpdateTodo }) {
    return (
        <div style={{ width: '100%' }}>
            {
                /* todos ve todoları mapledim ve propslarımı yazdım!*/
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
                ))

            }






        </div>
    )
}


export default Todolist