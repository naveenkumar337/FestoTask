import React from 'react'

export default function CardImage({props}) {
    return (
        <>
            <img src={props?props.thumbnail:''} className="img-fluid d-flex justify-content-center align-items-center" alt="Card-Image"/>
        </>
    )
}
