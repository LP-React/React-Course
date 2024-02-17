import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Prueba en 05-funciones', () => {
    test('getUser debe retornar un onjeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser()

        expect(testUser).toEqual(user);
    });

    test('getusuarioActivo debe retornar un objeto', () => {

        const name = 'Laysson';

        const usuarioActivo = getUsuarioActivo(name);

        expect(usuarioActivo).toEqual({ uid: 'ABC567', 
                                        username: name })

    })
})