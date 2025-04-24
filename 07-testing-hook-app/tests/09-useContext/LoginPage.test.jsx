import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en <LoginPage/>', () => {

    const user = {
        name: 'Jose',
        lastname: 'Cruz'
    }


    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )
        const pre = screen.getByLabelText('pre')
        expect(pre.innerHTML).toContain('null')
    });

    test('Debe de llamar el setUser', () => {

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        )


        const button = screen.getByLabelText('button')
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({
            name: 'Laysson',
            lastname: 'Polo'
        })

    });
})