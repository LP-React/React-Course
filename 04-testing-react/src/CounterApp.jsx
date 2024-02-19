import PropTypes from 'prop-types';
import { useState } from 'react';


export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const btnClickMin = () => {
        setCounter((c) => c - 1)
    }
    const btnClickReset = () => {
        setCounter(value)
    }
    const btnClickPlus = () => {
        setCounter((c) => c + 1)
    }

    return <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={btnClickMin}>- 1</button>
        <button aria-label='btn-reset' onClick={btnClickReset}>Reset</button>
        <button onClick={btnClickPlus}>+ 1</button>

    </>
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}