import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"

import { AuthContext } from "../../../src/auth"
import { AppRouter } from "../../../src/router/AppRouter"

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: {
            id: "ABC",
            name: "Laysson"
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(contextValue.user.name)).toBeTruthy()
    })

    test('Debe de llamar el logout y navigate cuando se hace click en logout', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutButton = screen.getByText('Logout')

        fireEvent.click(logoutButton)

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith("/Login", { "replace": true });
    })

    

})