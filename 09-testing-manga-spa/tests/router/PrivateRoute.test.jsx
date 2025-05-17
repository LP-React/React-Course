import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute/>', () => {

    test('Debe mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: "ABC",
                name: "Laysson"
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/test']}>

                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private Route')).toBeTruthy();

        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/test');
    })

})