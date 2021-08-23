import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState; // Extraer name y email

    // Entre corchetes para que solo se ejecute una vez (al principio)
    useEffect( () => {
        console.log('hey!');
    }, []);

    // useEffect( () => {
    //     console.log('formState cambió');
    // }, [formState]);

    // // Activa solo cuando hay cambios en el email
    // useEffect( () => {
    //     console.log('email cambió');
    // }, [email]);

    // Evento onChange, destructura propiedad 'target' del evento 'e'
    const handleInputChange = ( { target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value // ejem -> email: anderson@gmail.com
        });
    };

    // Esta hace que si el nombre es 'anderson' --> renderiza componente Message
    // { (name === 'anderson') && <Message /> }

    return (
        <>
          <h1>useEffect</h1>
          <hr />

          <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ingresa tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
              />
          </div>

          <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="correo@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
              />
          </div>

          { (name === 'anderson') && <Message /> }

        </>
    )
}
