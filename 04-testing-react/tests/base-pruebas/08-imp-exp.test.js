import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/data/heroes";

describe('Prueba 08-imp-exp', () => {
    test('Debe retornar un hero por Id', () => {
        const id = 1;

        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('Debe retornar undefined si no existe', () => {
        const id = 10310;

        const hero = getHeroeById(id);

        expect(hero).toEqual(undefined);
    });

    test('Debe retornar un arreglo con los heroes DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner)

        expect(heroesDC.length).toBe(heroes.filter((hero) => hero.owner == owner).length);
        expect(heroesDC).toEqual(heroes.filter((hero) => hero.owner == owner))
    });


    test('Debe retornar un arreglo con los heroes Marvel', () => {
        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner(owner)

        expect(heroesDC.length).toBe(heroes.filter((hero) => hero.owner == owner).length);
        expect(heroesDC).toEqual(heroes.filter((hero) => hero.owner == owner))
    })
})