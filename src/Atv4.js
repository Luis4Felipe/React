import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sculptureList } from './data.js';
import Button from './Button.js';
import AlertButton from './AlertButton.js';
import Form from './Form.js';
import Counter from './Counter.js';
import Form2 from './Form2.js';
import Form3 from './Form3.js';
import List2 from './List2.js';


export default function Atv4() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick(){
        setIndex(index + 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return (
    <>
    <h1>Atividade 4</h1>

    <Button />
    <AlertButton />
    <br/>

    <button onClick={handleNextClick}>
        Next
    </button>

    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>

    <h3>
        ({index + 1} of {sculptureList.length})
    </h3>
    <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
        {showMore && <p>{sculpture.description}</p>}
    </button>

    <br/>
    <img 
        src={sculpture.url}
        alt={sculpture.alt}
    />
    <br/>
    <br/>
    <Form />
    <Counter />
    <br/>
    <br/>
    <Form2 />
    <br/>
    <br/>
    <Form3 />
    <br/>
    <br/>
    <List2 />
    <br />
    <br />
    <Link to="/">Voltar</Link>
    </>
  );
}
