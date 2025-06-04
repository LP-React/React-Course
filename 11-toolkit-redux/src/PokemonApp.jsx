import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';
import { useEffect } from 'react';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons, page } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <div>PokemonApp</div>
            <hr />
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            <ul>
                {pokemons.map(pokemon => (<li key={pokemon.name}>{pokemon.name}</li>))}
            </ul>
            <button onClick={() => dispatch(getPokemons(page))}>
                Next
            </button>
        </>
    )
}
