import licoes from '../licoes';

function Licao({ onVoltar, id, onIrExercicios }) {
  const licao = licoes.find((licaoIndex) => licaoIndex.id === id);
  return (
    <div>
      <h2>{licao.titulo}</h2>
      <div>
        {licao.vocabulario.map((palavra) => (
          <div key={palavra.japones}>
            <p>{palavra.japones}</p>
            <p>{palavra.leitura}</p>
            <p>{palavra.portugues}</p>
          </div>
        ))}
      </div>
      <button onClick={onIrExercicios}>Praticar</button>
      <button onClick={onVoltar}>-- Voltar</button>
    </div>
  );
}

export default Licao;
