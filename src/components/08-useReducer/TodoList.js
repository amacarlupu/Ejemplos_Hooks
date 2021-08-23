// Componente que contiene el contenedor de los items, recorre con un map
// el arrego 'todos' y lo envia al componente TodoListItem
import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoListItem key={todo.id} {...todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}
