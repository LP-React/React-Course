import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en <AppRoute/>', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
            user: {
                id: 'abc',
                name: 'Laysson'
            }
        }

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getAllByText('Login').length).toBe(2)
    })

    test('Debe de mostrar el compoete <Manga/> si esta logeado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: "abc",
                name: "Laysson"
            }
        }

        render(
            <MemoryRouter initialEntries={['/Login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )


        expect(screen.getAllByText('Mangas').length).toBeGreaterThanOrEqual(1)


    })

})