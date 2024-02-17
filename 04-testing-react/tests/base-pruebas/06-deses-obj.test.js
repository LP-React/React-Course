import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba 06-deses-obj', () => {
    test('Tiene que regresar un objeto', () => {
        const clave = 'LP-React', nombre = 'Laysson', edad = 19;

        const usContextTest = usContext({ clave, nombre, edad });

        console.log(usContextTest);

        expect(usContextTest).toEqual({ nombreClave: clave, 
                                        nombre: nombre, 
                                        anios: edad, 
                                        latlng: {
                                                    lat: 14.1232,
                                                    lng: -12.3232 
                                                }
                                        })
    })
})