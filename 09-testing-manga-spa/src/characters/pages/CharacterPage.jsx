import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getCharacterById } from "../helpers"
import { useMemo } from "react"

export const CharacterPage = () => {

    const { characterId } = useParams()

    const character = useMemo(() => getCharacterById(characterId), [characterId])

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }


    if (!character) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/characters/${character.id}.webp`} alt={character.name} className="img-thumbnail" />

            </div>
            <div className="col-3">
                <h3>{character.name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">From: {character.manga}</li>
                    <li className="list-group-item">Author: {character.publisher}</li>
                </ul>
                <button className="btn btn-outline-primary" onClick={onNavigateBack}>
                    Back
                </button>
            </div>
        </div>
    )
}
