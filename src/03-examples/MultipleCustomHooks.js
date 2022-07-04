import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingQuote, Quote } from '../components/index'

export const MultipleCustomHooks = () => {
    const { increment, counter } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr />

            {
                isLoading ? (<LoadingQuote />) : ( <Quote author={ author } quote={ quote }/>)
            }
            <button className='btn btn-primary mt-2' onClick={ () => increment() } disabled= { isLoading } >Next quote</button>
        </>
    )
}

