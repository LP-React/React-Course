import { useMemo } from 'react'

import { CharacterCard } from './CharacterCard'

import { getCharacterByPublisher } from '../helpers'

export const CharacterList = ({ manga }) => {

    const characters = useMemo(() => getCharacterByPublisher(manga), [manga])


    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {characters.map(character =>
                <div key={character.id}>
                    <CharacterCard character={character} />
                </div>
            )}
        </div>
    )
}
