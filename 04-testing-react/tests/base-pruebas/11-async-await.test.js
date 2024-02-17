import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Prueba 11-async-await', () => { 
    test('Debe retornar una url', async () => { 
        const url = await getImagen();

        console.log('epeppepeppeep' + url)
     })
 })