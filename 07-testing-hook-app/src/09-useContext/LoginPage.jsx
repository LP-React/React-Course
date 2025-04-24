import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <h1>LoginPage</h1>
            <button className='btn btn-primary' onClick={() => setUser({
                name: 'Laysson',
                lastname: 'Polo'
            })} aria-label='
            button'>Set user</button>
            <hr />

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    )
}
