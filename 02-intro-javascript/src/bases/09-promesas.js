import { getHeroe } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroe(2);
//         if (!!!heroe) {
//             reject('No encontrado')
//         } else {
//             resolve(heroe)
//         }
//     }, 2000);

// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa', heroe)
// })
//     .catch(err => console.warn(err))

const getHeroeAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroe(id);
            if (!!!heroe) {
                reject('No encontrado')
            } else {
                resolve(heroe)
            }
        }, 2000);
    });
}
getHeroeAsync(2).then((heroe) => console.log('Heroe: ',heroe))