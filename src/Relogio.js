import React, { useState, useEffect } from 'react';


function Relogio() {
  const [horarioAtual, setHorarioAtual] = useState('');

  useEffect(() => {
    const atualizarHorario = () => {
      const dataAtual = new Date();
      const horas = formatarValor(dataAtual.getHours());
      const minutos = formatarValor(dataAtual.getMinutes());
      const segundos = formatarValor(dataAtual.getSeconds());

      setHorarioAtual(`Horário atual: ${horas}:${minutos}:${segundos}`);
    };

    const formatarValor = (valor) => {
      return valor < 10 ? "0" + valor : valor;
    };

    const intervalId = setInterval(atualizarHorario, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p id="horarioAtual">{horarioAtual}</p>
    </div>
  );
}

export default Relogio;
