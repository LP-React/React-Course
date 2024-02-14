import { heroes, owners} from "../data/heroes";

// console.log(owners)

export const getHeroe = (id) => {
    return heroes.find((heroe) => heroe.id === id)
};
// console.log(getHeroe(3))

export const getOwn = (owner) => {
    return heroes.filter((heroes) => heroes.owner == owner)
}
// console.log(getOwn('DC'))