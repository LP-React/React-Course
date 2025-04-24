import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoRecuder', () => {

    const initialState = [
        {
            id: 1,
            description: 'Demo TODO',
            done: false,
        }
    ]

    const newTodo = {
        id: 3,
        description: 'New TODO',
        done: false,
    }

    test('Debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {})

        expect(newState).toBe(initialState)

    })

    test('Debe agregar un TODO', () => {

        const action = { type: '[TODO] Add Todo', payload: newTodo };

        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    })

    test('Debe eliminar un TODO', () => {

        const action1 = { type: '[TODO] Add Todo', payload: newTodo };
        const newState1 = todoReducer(initialState, action1);

        const action2 = { type: '[TODO] Delete Todo', payload: newState1[1].id }
        const newState2 = todoReducer(newState1, action2);


        expect(newState2.length).toBe(1)
    })

    test('Debe hacer Check en el TODO', () => {

        const action1 = { type: '[TODO] Add Todo', payload: newTodo };
        const newState1 = todoReducer(initialState, action1);
        
        const action2 = { type: '[TODO] Check Todo', payload: newTodo.id };
        const newState2 = todoReducer(newState1, action2)
        
        expect(newState2[1].done).toBe(true)

        const newState3 = todoReducer(newState2, action2)

        expect(newState3[1].done).toBe(false)

    })
})