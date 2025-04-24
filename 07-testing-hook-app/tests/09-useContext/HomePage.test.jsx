import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/09-useContext/HomePage"
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <HomePage/>', () => {

    const userData = {
        id: 1,
        name: 'Laysson',
    }


    test('Debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')

    })

    test('Debe de mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user: userData }}>
                <HomePage />
            </UserContext.Provider>
        );

        screen.debug()

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toContain(userData.name)
        expect(preTag.innerHTML).toContain(userData.id.toString())

    })
})