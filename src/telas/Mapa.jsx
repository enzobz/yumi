function Mapa({ onVoltar, onEntrarLicao }) {
  const licoes = [
    { id: 1, titulo: 'これは何ですか' },
    { id: 2, titulo: 'これは私のです' },
    { id: 3, titulo: 'ここは教室です' },
  ];

  return (
    <div>
      {licoes.map((licao) => (
        <div key={licao.id}>
          <p>Lição {licao.id}</p>
          <p>{licao.titulo}</p>
          <button onClick={() => onEntrarLicao(licao.id)}>COMEÇAR</button>
        </div>
      ))}
    </div>
  );
}

export default Mapa;
