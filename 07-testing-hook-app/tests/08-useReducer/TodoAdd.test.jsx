import { render } from "@testing-library/react"
import { TodoAdd } from "../../src/08-useReducer/TodoAdd"

describe('Pruebas en <TodoAdd/>', () => {

    const onNewToDoMock = jest.fn()

    test('Debe renderizarse', () => {
        render(<TodoAdd onNewTodo={onNewToDoMock}/>)
    })
})