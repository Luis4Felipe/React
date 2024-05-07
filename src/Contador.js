import React, { useState } from 'react';
import homemIMG from './download1.png';
import mulherIMG from './download3.png';

function Contador() {
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const adicionarHomem = () => {
    setTotalHomens(totalHomens + 1);
  };

  const removerHomem = () => {
    if (totalHomens > 0) {
      setTotalHomens(totalHomens - 1);
    }
  };

  const adicionarMulher = () => {
    setTotalMulheres(totalMulheres + 1);
  };

  const removerMulher = () => {
    if (totalMulheres > 0) {
      setTotalMulheres(totalMulheres - 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px', border: '2px solid #333', borderRadius: '10px', padding: '20px', width: '300px', margin: '0 auto' }}>
      <div>
        <img src={homemIMG} alt="Imagem de homem" width="200" />
        <div>
          <h3>Homens: {totalHomens}</h3>
          <button onClick={adicionarHomem} style={{ padding: '5px 10px', margin: '5px' }}>Adicionar Homem</button>
          <button onClick={removerHomem} style={{ padding: '5px 10px', margin: '5px' }}>Remover Homem</button>
        </div>
      </div>
      <div>
        <img src={mulherIMG} alt="Imagem de mulher" width="200" />
        <div>
          <h3>Mulheres: {totalMulheres}</h3>
          <button onClick={adicionarMulher} style={{ padding: '5px 10px', margin: '5px' }}>Adicionar Mulher</button>
          <button onClick={removerMulher} style={{ padding: '5px 10px', margin: '5px' }}>Remover Mulher</button>
        </div>
      </div>
      <div>
        <h3>Total: {totalHomens + totalMulheres}</h3>
      </div>
    </div>
  );
}

export default Contador;
