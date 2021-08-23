import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    // Utilizar el customHook 'useForm' que retorna el estado y el evento 'handleInputChange'
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    // Funcion para controlar evento submit, esta funcion se ejecutará
    // cuando react note alguna modificacion, recibe el estado 'description'
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        // crear nuevo Todo
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        // Enviamos la accion mediante la funcion handleAddTodo
        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
