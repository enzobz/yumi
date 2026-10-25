import { useState } from 'react';
import BoasVindas from './telas/BoasVindas';
import Mapa from './telas/Mapa';
import Licao from './telas/Licao';
import Exercicio from './telas/Exercicio';
import licoes from './licoes';

function App() {
  const [telaAtual, setTelaAtual] = useState('BoasVindas');
  const [licaoAtual, setLicaoAtual] = useState(null);
  const [questaoAtual, setQuestaoAtual] = useState(0);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#efe5cf',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      {telaAtual === 'BoasVindas' && (
        <BoasVindas onComecar={() => setTelaAtual('Mapa')} />
      )}

      {telaAtual === 'Mapa' && (
        <Mapa
          onVoltar={() => setTelaAtual('BoasVindas')}
          onEntrarLicao={(id) => {
            setLicaoAtual(id);
            setTelaAtual('Licao');
          }}
        />
      )}

      {telaAtual === 'Licao' && (
        <Licao
          onVoltar={() => setTelaAtual('Mapa')}
          id={licaoAtual}
          onIrExercicios={() => {
            setQuestaoAtual(0);
            setTelaAtual('Exercicio');
          }}
        />
      )}

      {telaAtual === 'Exercicio' && (
        <Exercicio
          key={questaoAtual}
          onVoltar={() => setTelaAtual('Licao')}
          questao={
            licoes.find((questaoAtual) => questaoAtual.id === licaoAtual)
              .exercicios[questaoAtual]
          }
          onProxima={() => {
            const totalQuestoes = licoes.find((l) => l.id === licaoAtual)
              .exercicios.length;
            if (questaoAtual + 1 < totalQuestoes) {
              setQuestaoAtual(questaoAtual + 1);
            } else {
              setTelaAtual('Licao');
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
