import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleCheckTodo = (todo) => {
        const action = {
            type: '[TODO] Check Todo',
            payload: todo
        }

        dispatch(action)
    }

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos) || [])

    }, [todos])

    const todosCount = todos.length
    const todosPending = todos.filter(todo => !todo.done).length

    return {
        todos, todosCount, handleNewTodo, handleDeleteTodo, handleCheckTodo, todosPending
    }
}