import { characters } from "../data/characters";

export const getCharacterByName = (name = '') => {
    name = name.toLocaleLowerCase().trim()

    if (name.length === 0) return [];

    return characters.filter(
        character => character.name.toLocaleLowerCase().includes(name)
    )
}