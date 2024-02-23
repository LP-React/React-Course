import { getGif } from "../../src/helpers/getGif"

describe('Pruebas en getGif()', () => {

    test('Debe retornar un arreglo con objetos ( gifs ) ', async () => {

        const gifs = await getGif('Imperial Circus dead Decadence')
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    })

})