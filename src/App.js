import React, { useState } from 'react';

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState('ENTRADA');

  // palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [rodada, setRodada] = useState(0);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado('RODANDO');
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNumPalpites(1);
  };

  if (estado === 'ENTRADA') {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado('FIM');
    setRodada(rodada + 1);
  };
  if (estado === 'FIM') {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <p>
          Minha pontuação até agora: {rodada}{' '}
          {rodada === 1 ? 'acerto' : 'acertos'}
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente!</button>
      </div>
    );
  }

  // 0 <> 300
  // palpites que maquina deu
  return (
    <div style={{ textAlign: 'center' }}>
      <p>O seu número é {palpite}</p>
      {/* <p>Min: {min} / Max: {max}</p> */}
      <button onClick={menor}>É menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>É maior!</button>
    </div>
  );
}

export default App;
