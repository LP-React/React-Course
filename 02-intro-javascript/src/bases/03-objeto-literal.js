const persona = {
    nombre: 'Laysson',
    apellido: 'Polo',
    edad: 19,
    direccion: {
        ciudad: 'Lima',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Jamir';


console.log( persona );
console.log( persona2 )