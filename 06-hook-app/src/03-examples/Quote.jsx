import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ data, counter }) => {

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    const pRef = useRef()

    useLayoutEffect(() => {
        const {height, width} = (pRef.current.getBoundingClientRect())
        setBoxSize({
            height, width
        })
    }, [data.game_indices[counter].version.name])

    return (
        <>
            <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
                <p className='mb-1' ref={pRef}>{data.game_indices[counter].version.name}</p>
                <footer className='blockquote-footer'>Fernando Herrera</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}

