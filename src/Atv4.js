import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.js';
import AlertButton from './AlertButton.js';
import { sculptureList } from './data.js';


export default function Atv4() {
    let index = 0;

    function handleClick(){
        index = index + 1;
    }

    let sculpture = sculptureList[index];
    return (
    <>
    <h1>Atv 4</h1>
    <Button />
    <AlertButton />

    <button onClick={handleClick}>
        Next
    </button>
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>
    <h3>
        ({index + 1} of {sculptureList.length})
    </h3>
    <img 
        src={sculpture.url}
        alt={sculpture.alt}
    />
    <p>
        {sculpture.description}
    </p>
    <Link to="/">Voltar</Link>
    </>
  );
}
