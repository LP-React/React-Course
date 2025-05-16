import { Link } from 'react-router-dom'

export const CharacterCard = ({ character }) => {

    const characterURL = `/assets/characters/${character.id}.webp`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={characterURL} alt={character.name} className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5>{character.name}</h5>
                            <p className="card-text">{character.manga}</p>
                            <Link to={`/Character/${character.id}`}>Read more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
