import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth/context/AuthContext'
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Pruebas en <PublicRoute/>', () => {

    test('Debe mostrar el children si no esta autenticado ', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Public Route</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public Route')).toBeTruthy();

    })

    test('Debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: "ABC",
                name: "Laysson"
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Public Route</h1>
                            </PublicRoute>
                        } />
                        <Route path='/' element={<h1>Main Page</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Main Page')).toBeTruthy();
    })


})