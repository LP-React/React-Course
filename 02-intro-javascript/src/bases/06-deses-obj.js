const persona = {
    nombre: 'Laysson',
    edad: 19
}

const { nombre, edad } = persona;

console.log(nombre, edad);

const returnPersona = ({ nombre, edad }) => {
    console.log(nombre,edad)
}

returnPersona(persona);