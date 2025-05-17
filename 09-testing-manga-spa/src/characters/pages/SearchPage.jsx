import { useLocation, useNavigate } from "react-router-dom"

import queryString from "query-string"

import { useForm } from "../../hooks/useForm"
import { CharacterCard } from "../components"
import { getCharacterByName } from "../helpers"

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const characters = getCharacterByName(q);


    const { searchText, onInputChange, onClear } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>Search</h1>

            <div className="row">

                <div className="col-5">
                    <h4>Searching...</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input type="text" placeholder="Search a character" name="searchText" autoComplete="off" className="form-control" value={searchText} onChange={onInputChange} />
                        <button className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                            ? <div className="alert alert-primary">Search a character</div>
                            : (characters.length === 0) && <div aria-label="alert" className="alert alert-danger">No character with <b>{q}</b></div>
                    }


                    {
                        characters.map(
                            character =>
                                <CharacterCard character={character} key={character.id} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
