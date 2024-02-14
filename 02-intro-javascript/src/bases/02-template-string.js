const nombre = 'Laysson';
const apellido = 'Polo';

const nombreCompleto = `Hola, mi nombre es ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo('Laysson')}`)