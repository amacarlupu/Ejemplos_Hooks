import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // };

    // hook useCallback ya no vuelve a renderizar el componente al
    // cambiar el 'setCounter', tambien es necesario el React.memo en el comp. origen
    const increment = useCallback( (num) => {
        setCounter( c => c + num ); // Es lo mismo que 'setCounter( counter +1 )'
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </div>
    )
}
