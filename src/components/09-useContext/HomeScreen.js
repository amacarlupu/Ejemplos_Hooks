import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // Acceso al usuario ubicado en UserContext.js.
    // useContext busca la siguiente instancia del tipo UserContext
    // en este arbol de componentes
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
