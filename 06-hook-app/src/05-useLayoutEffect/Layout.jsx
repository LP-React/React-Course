import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote} from '../03-examples';

export const Layout = () => {

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const { counter, increment, decrement, reset } = useCounter()


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote data={data} counter={counter} />
            }

            <button disabled={isLoading} className='btn btn-primary' onClick={() => increment()}>Next Quote</button>
            <button className='btn btn-primary' onClick={reset}>Reset</button>
        </>
    )
}
