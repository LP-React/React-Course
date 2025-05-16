import { authReducer } from "../../../src/auth/context"
import { types } from "../../../src/auth/types/types"


describe('Pruebas en authReducer', () => {

    test('Debe retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})

        expect(state).toEqual({ logged: false })

    })

    test('Debe poner logged en true y establecer el user con el type.login', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Laysson',
                id: 'A1B2C3'
            }
        }

        const state = authReducer({ logged: false }, action);


        expect(state).toEqual(
            {
                logged: true,
                user: action.payload,
            }
        )

    })

    test('Debe de borrar el usuario y establecer logged en false con el type.logout', () => {

        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Laysson'
            }
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action);

        expect(newState).toEqual(
            {
                logged: false
            }
        )

    })

})