const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar('Laysson'));

const saludar2 = (nombre) => `Hola, ${nombre}`;
console.log(saludar2('Laysson'));

const getUser = () => ({
    user: 'ljamir',
    name: 'Laysson'
});
console.log(getUser());