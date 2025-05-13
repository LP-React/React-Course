import { characters } from "../data/characters";

export const getCharacterByPublisher = (manga) => {

    const validMangas = ["Dead Dead Demon's Dededede Destruction", "Neon Genesis Evangelion", "Oyasumi Punpun"];

    if (!validMangas.includes(manga)) {
        throw new Error(`${manga} is not a valid manga`)
    }

    return characters.filter( character => character.manga === manga)
}