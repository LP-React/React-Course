import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onClear } = useForm({
        description: ''
    })

    const { description } = formState;

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        onNewTodo(newTodo)
        onClear()
    }

    return (


        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='¿Que hay que hacer?' name='description' value={description} className='form-control' onChange={onInputChange} />
            <button type='submit' className='btn btn-primary mt-1'>Agregar</button>
        </form>

    )
}
