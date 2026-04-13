function Trilha() {
    const licoes = [
        { id: 1, nome: 'Apresentações', desbloqueada: true },
        { id: 2, nome: 'Profissões e Países', desbloqueada: false },
        { id: 3, nome: 'Objetos do Cotidiano', desbloqueada: false },
    ];

    return (
        <div className="trilha">
            <h2>Sua Jornada | の旅</h2>
            <p>Escolha uma lição para começar</p>

            {
                licoes.map(licao => (
                    <div key={licao.id}>{licao.nome}</div>
                ))
            }
        </div>
    )
}
