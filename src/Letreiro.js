import React, { useState, useEffect } from 'react';

function Letreiro() {
  const texto = "Conheça a Fatec! ";
  const [digitacao, setDigitacao] = useState('');
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      // Atualiza o estado da digitação adicionando uma letra ao texto
      setDigitacao(texto.substring(0, indice + 1));
      // Incrementa o índice para avançar na próxima letra
      setIndice((prevIndice) => (prevIndice + 1) % texto.length);
    }, 400);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div>
      <h1>{digitacao}</h1>
    </div>
  );
}

export default Letreiro;




