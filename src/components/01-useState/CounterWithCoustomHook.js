import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCoustomHook = () => {

    // Obtener lo que regresa el customHook "useCounter"
    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />

            <button onClick={ () => increment(2) } className="btn btn-success mr-2"> + 1</button>
            <button onClick={ () => decrement(2) } className="btn btn-danger mr-2"> - 1</button>
            <button onClick={ reset } className="btn btn-warning mr-2"> Reset </button>
        </>
    )
}
