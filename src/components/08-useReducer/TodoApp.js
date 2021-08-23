import React, { useEffect, useReducer } from 'react';

import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    const init = () => {
        //Obtener Todos del LocalStorage, si no existe retornar arreglo vacio
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    // useReducer tiene tres parametros: una funcion, el estado inicial y una funcion con el estado inicial
    // El primero es la funcion 'todoReducer' que contiene el estado y la acción a ejecutar
    // El segundo es el dispatch, que es una funcion ejecuta la accion que pertenece a la funcion 'todoReducer'
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    // Grabar en el LocalStorage cada vez que 'todo' se modifica
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    // Funcion para borrar un todo
    const handleDelete = (todoID) => {
        // Obtner el id del todo
        const id = todoID;

        // crear la accion
        const action = {
            type: 'delete',
            payload: id
        }

        // dispatch
        dispatch(action);
    }

    // Funcion para activar una clase
    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    // Funcion para añadir un nuevo todo
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>

            </div>
        </div>
    )
}
