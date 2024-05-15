import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [texto, setTexto] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const animarTexto = () => {
      const textoCompleto = 'Conheça a Fatec';
      if (index < textoCompleto.length) {
        setTexto(texto + textoCompleto[index]);
        setIndex(index + 1);
      } else {
        setTexto('');
        setIndex(0);
      }
    };

    const timerID = setInterval(() => {
      animarTexto();
    }, 100);

    return () => clearInterval(timerID);
  }, [index, texto]);

  return <div>{texto}</div>;
}

export default Letreiro;





