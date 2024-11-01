import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext)

    const login = () => {
        setUser({
            name: 'Laysson',
            lastname: 'Polo'
        })
    }

    return (
        <>
            <h1>LoginPage</h1>
            <button className='btn btn-primary' onClick={login}>Set user</button>
            <hr />

            <p>
                {JSON.stringify(user)}
            </p>
        </>
    )
}
