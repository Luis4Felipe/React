import { useState } from 'react';

export default function Counter(){
    const [ number, setnNumber ] = useState(0);

    return(
        <>
            <h1>{number}</h1>

            <button onClick={() => {
                setnNumber(number + 5);
                setnNumber(n => n + 1);
                setnNumber(42);
            }}> Increase the number </button>
        </>
    )
}