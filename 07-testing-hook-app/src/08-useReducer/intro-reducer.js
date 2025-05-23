const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}]

const newTodo = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: true
}

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }

    return state;
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

let todos = todoReducer()

todos = todoReducer(todos, addTodoAction);


console.log({ state: todos })