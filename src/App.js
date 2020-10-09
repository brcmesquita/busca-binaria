import React, { useState } from 'react';
import Button from './Button';
import './index.css';

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState('ENTRADA');

  // palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);
  const [totalPalpites, setTotalPalpites] = useState(0);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  // contagem de rodadas
  const [rodada, setRodada] = useState(0);

  const iniciarJogo = () => {
    setEstado('RODANDO');
    // 0 <> 300
    setPalpite(150);
    setMin(0);
    setMax(300);
    // palpites que a máquina deu
    setNumPalpites(1);
  };

  if (estado === 'ENTRADA') {
    return (
      <div>
        <Button onClick={iniciarJogo} texto={'Começar a Jogar!'} />
      </div>
    );
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setTotalPalpites(totalPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setTotalPalpites(totalPalpites + 1);
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
        <p className='negrito'>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <p>
          Minha pontuação até agora: {rodada}{' '}
          {rodada === 1 ? 'acerto' : 'acertos'}
        </p>
        <p>
          Total de chutes: {totalPalpites}{' '}
          {totalPalpites === 1 ? 'chute' : 'chutes'}
        </p>
        <Button onClick={iniciarJogo} texto={'Iniciar novamente!'} />
      </div>
    );
  }

  const mostrarPlacar = () => {
    if (rodada > 0) {
      return (
        <p>
          Minha pontuação até agora: {rodada}
          {rodada === 1 ? ' acerto' : ' acertos'}
        </p>
      );
    }
  };

  return (
    <div>
      <h3>O seu número é {palpite}</h3>
      <div>
        <Button onClick={menor} texto={'É menor!'} classe={'btn-menor'} />
        <Button onClick={acertou} texto={'Acertou!'} classe={'btn'} />
        <Button onClick={maior} texto={'É maior!'} classe={'btn-maior'} />
      </div>
      <div>{mostrarPlacar()}</div>
    </div>
  );
}

export default App;
