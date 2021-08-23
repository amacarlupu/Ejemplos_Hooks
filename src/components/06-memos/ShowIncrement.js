import React from 'react'

// Recibe una funcion como parametro
export const ShowIncrement = React.memo(( { increment }) => {

    console.log('Me volvi a generar :c');
    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment(5); // Incrementa en 5
            }}
        >
            Incrementar
        </button>
    )
})
