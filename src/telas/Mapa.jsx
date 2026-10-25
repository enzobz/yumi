import licoes from '../licoes';

function Mapa({ onVoltar, onEntrarLicao }) {
  return (
    <div>
      {licoes.map((licao) => (
        <div key={licao.id}>
          <p>Lição {licao.id}</p>
          <p>{licao.frase}</p>
          <button onClick={() => onEntrarLicao(licao.id)}>COMEÇAR</button>
        </div>
      ))}
      <button onClick={onVoltar}>-- Voltar</button>
    </div>
  );
}

export default Mapa;
