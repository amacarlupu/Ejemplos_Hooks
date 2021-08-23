import React, { useState } from 'react'
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    // Variable 'show' para mostrar o no el componente
    const [show, setShow] = useState(false); 

    // show && <MultipleCustomHooks ==> quiere decir que si show es true, muestra componente
    // MultipleCustomHooks, sino no.

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                onClick={ () => {
                    setShow( !show ); // Vuelve true el show y asi para mostrar u ocultar
                }}
                className="btn btn-warning mt-3"
            >
                Hide/Show
            </button>

        </div>
    )
}
