describe('Pruebas en <DemoComponent/>', () => {
    test('Esta prueba no debe fallar', () => {
        // 1.Inicializacion
        const message = 'Hola Mundo';
    
        // 2.Estímulo
        const message2 = message.trim();
    
        // 3. Observar comportamiento
        expect(message).toBe(message2)
    })
})

