const personajes = ['Laysson','Jamir'];

const [,nombre] = personajes;
console.log(nombre);

const returnArreglo = () => {
    return ['ABC', 123]
}

const [ar, ar2] = returnArreglo()
console.log(ar, ar2)

const desArray = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre2, setNombre] = desArray('Laysson');
console.log(nombre2);
setNombre();