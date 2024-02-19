import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba 11-async-await', () => {
    test('Debe retornar una url', async () => {
        const resp = await getImagen();
        expect(typeof resp).toBe('string');
    });
    // test('Debe retornar una error si no tenemos API Key', async () => { 
    //     const resp = await getImagen();
    //     expect(resp).toBe('No se encontro la imagen'); 
    // })
})