import { useState } from 'react';

function Exercicio({ questao, onVoltar, onProxima }) {
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [jaRespondeu, setJaRespondeu] = useState(false);

  return (
    <div>
      <h2>{questao.pergunta}</h2>
      <div>
        {questao.opcoes.map((opcao) => (
          <button
            key={opcao}
            onClick={() => {
              setRespostaSelecionada(opcao);
              setJaRespondeu(true);
            }}
          >
            {opcao}
          </button>
        ))}
      </div>
      {jaRespondeu && (
        <p>{respostaSelecionada === questao.correta ? '✅ Acertou!' : '❌ Errou!'}</p>
      )}
      {jaRespondeu && (
        <button onClick={onProxima}>Próxima →</button>
      )}
      <button onClick={onVoltar}>-- Voltar</button>
    </div>
  );
}

export default Exercicio;
