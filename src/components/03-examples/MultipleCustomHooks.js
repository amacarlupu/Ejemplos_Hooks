import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    // Obtener el estado del contador y el metodo para aumentar su valor
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // !!data --> false; si es falso imprime undefined y si es verdadero
    // es decir trae data, imprime esta info.
    // Si no hay data, envia null, por defecto !null = true y !!null = false
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>BreakingBad Quotres</h1>
            <hr />

            {
                loading?
                (
                    <div className="alert alert-info text-center">Loading...</div>
                ):
                (
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button
                onClick={ increment }    
                className="btn btn-primary">
                Siguiente Frase
            </button>
        </div>
    )
}
