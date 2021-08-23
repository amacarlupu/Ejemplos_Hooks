// Muestra en pantalla los items recibidos de TodoList
import React from 'react'

export const TodoListItem = ({ id, desc, done, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={id}
            className="list-group-item"
        >
            <p
                className={`${done && 'complete'}`}
                onClick={() => handleToggle(id)}
            >
                {index + 1}. {desc}
            </p>
            <button
                className="btn btn-danger"
                onClick={(e) => handleDelete(id, e)}
            >
                Borrar
            </button>
        </li>
    )
}

