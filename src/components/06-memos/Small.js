import React from 'react'

export const Small = React.memo(( { value }) => {

    console.log('Me volví a llamar :v');

    return (
       <small>{ value }</small>
    )
})
