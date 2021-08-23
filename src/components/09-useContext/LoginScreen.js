import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    // Obtengo la referencia ubicada en el componente padre 'UserContext'
    const { setUser } = useContext(UserContext);
    // console.log(user);

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => setUser({
                    id: 6500033134,
                    name: 'Anderson',
                    email: 'mininom95@gmail.com'
                })}
            >
                Login
            </button>
        </div>
    )
}
