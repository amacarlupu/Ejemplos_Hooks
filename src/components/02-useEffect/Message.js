import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });
    const { x, y } = coords; // Extraer propiedades con destructuracion

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y}; // obtener coordenadas x e y
            setCoords( coords );
        }

        // Llamar al metodo con el evento, para evitar duplicidad
        window.addEventListener('mousemove', mouseMove );

        return () => {
            // Remover evento 'mouseMove'
            window.removeEventListener('mousemove', mouseMove )
        }
    }, []);

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x: { x } y: { y }
            </p>
        </div>
    )
}
