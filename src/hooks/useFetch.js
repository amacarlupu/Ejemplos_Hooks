import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    // Referencia para saber si el componente está montado o no.
    const isMounted = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    // useEffect que solo se ejecutará al inicio, por el [] vacio
    useEffect(() => {
        // Sin cuerpo, al desmontar el use Effect poner en false isMounted
        return () => {
            isMounted.current = false;
        }
    }, []);

    // async function getQuote(){
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();

    //     setState({
    //         loading: false,
    //         error: null,
    //         data
    //     });
    // }

    useEffect(() => {

        setState({ loading: true, error: null, data: null });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // Validar si está montado el componente
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            });

    }, [url]);

    return state;
}
