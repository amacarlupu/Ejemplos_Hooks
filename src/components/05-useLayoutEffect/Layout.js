import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css';

export const Layout = () => {

    // Obtener el estado del contador y el metodo para aumentar su valor
    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    // !!data --> false; si es falso imprime undefined y si es verdadero
    // es decir trae data, imprime esta info.
    // Si no hay data, envia null, por defecto !null = true y !!null = false
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);


    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                <p
                    ref={pTag}
                    className="mb-0"
                >
                    {quote}
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button
                onClick={increment}
                className="btn btn-primary">
                Siguiente Frase
            </button>
        </div>
    )
}
