import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onClear} = useForm({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formState


    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input type="text" className='form-control' placeholder='Username' name='username' value={username} onChange={onInputChange} />
            <input type="email" className='form-control mt-2' placeholder='email@gmail.com' name='email' value={email} onChange={onInputChange} />
            <input type="password" className='form-control mt-2' placeholder='Password' name='password' value={password} onChange={onInputChange} />

            {
                (username==='strider2') && <Message/>
            }

            <button onClick={onClear} className='btn btn-primary mt-2'>Clear</button>
        </>
    )
}
