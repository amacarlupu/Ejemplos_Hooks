import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // Obtener los valores devueltos por custom hook 'useForm'
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues; // Extraer name. email y contraseña

    useEffect( () => {
        console.log('email cambió')
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    };

    return (
        <form onSubmit={ handleSubmit }>
          <h1>FormWithCustomHook</h1>
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

          <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                value={ password }
                onChange={ handleInputChange }
              />
          </div>

          <button 
            type="submit"
            className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
