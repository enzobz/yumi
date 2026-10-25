const licoes = [
  {
    id: 1,
    titulo: 'これ・それ・あれ (Objetos e coisas)',
    vocabulario: [
      { japones: 'これ', leitura: 'kore', portugues: 'isto' },
      { japones: 'それ', leitura: 'sore', portugues: 'isso' },
      { japones: 'あれ', leitura: 'are', portugues: 'aquilo' },
      { japones: 'この', leitura: 'kono', portugues: 'este/esta' },
      { japones: 'その', leitura: 'sono', portugues: 'esse/essa' },
      { japones: 'あの', leitura: 'ano', portugues: 'aquele/aquela' },
      { japones: 'なん・なに', leitura: 'nan / nani', portugues: 'o quê' },
      { japones: 'ほん', leitura: 'hon', portugues: 'livro' },
      { japones: 'かばん', leitura: 'kaban', portugues: 'bolsa' },
      { japones: 'かさ', leitura: 'kasa', portugues: 'guarda-chuva' },
      { japones: 'じしょ', leitura: 'jisho', portugues: 'dicionário' },
    ],
    exercicios: [
      {
        pergunta: 'O que significa これ?',
        opcoes: ['isto', 'isso', 'aquilo', 'onde'],
        correta: 'isto',
      },
      {
        pergunta: 'O que significa それ?',
        opcoes: ['aquilo', 'isso', 'livro', 'quem'],
        correta: 'isso',
      },
      {
        pergunta: 'O que significa あれ?',
        opcoes: ['aquilo', 'isto', 'banheiro', 'aqui'],
        correta: 'aquilo',
      },
      {
        pergunta: 'O que significa この?',
        opcoes: ['este/esta', 'esse/essa', 'aquele/aquela', 'onde'],
        correta: 'este/esta',
      },
      {
        pergunta: 'O que significa その?',
        opcoes: ['este/esta', 'esse/essa', 'aquilo', 'quem'],
        correta: 'esse/essa',
      },
      {
        pergunta: 'O que significa あの?',
        opcoes: ['aquele/aquela', 'isso', 'livro', 'aqui'],
        correta: 'aquele/aquela',
      },
      {
        pergunta: 'O que significa なん・なに?',
        opcoes: ['quem', 'o quê', 'onde', 'amigo'],
        correta: 'o quê',
      },
      {
        pergunta: 'O que significa ほん?',
        opcoes: ['livro', 'bolsa', 'escola', 'hospital'],
        correta: 'livro',
      },
      {
        pergunta: 'O que significa かばん?',
        opcoes: ['bolsa', 'guarda-chuva', 'dicionário', 'banheiro'],
        correta: 'bolsa',
      },
      {
        pergunta: 'O que significa かさ?',
        opcoes: ['guarda-chuva', 'livro', 'escola', 'quem'],
        correta: 'guarda-chuva',
      },
      {
        pergunta: 'O que significa じしょ?',
        opcoes: ['dicionário', 'hospital', 'amigo', 'japonês'],
        correta: 'dicionário',
      },
    ],
  },

  {
    id: 2,
    titulo: 'ここ・そこ・あそこ (Lugares)',
    vocabulario: [
      { japones: 'ここ', leitura: 'koko', portugues: 'aqui' },
      { japones: 'そこ', leitura: 'soko', portugues: 'aí' },
      { japones: 'あそこ', leitura: 'asoko', portugues: 'ali/lá' },
      { japones: 'どこ', leitura: 'doko', portugues: 'onde' },
      { japones: 'こちら', leitura: 'kochira', portugues: 'aqui (formal)' },
      { japones: 'そちら', leitura: 'sochira', portugues: 'aí (formal)' },
      { japones: 'あちら', leitura: 'achira', portugues: 'lá (formal)' },
      { japones: 'がっこう', leitura: 'gakkou', portugues: 'escola' },
      { japones: 'びょういん', leitura: 'byouin', portugues: 'hospital' },
      {
        japones: 'コンビニ',
        leitura: 'konbini',
        portugues: 'loja de conveniência',
      },
      { japones: 'トイレ', leitura: 'toire', portugues: 'banheiro' },
    ],
    exercicios: [
      {
        pergunta: 'O que significa ここ?',
        opcoes: ['aqui', 'aí', 'lá', 'onde'],
        correta: 'aqui',
      },
      {
        pergunta: 'O que significa そこ?',
        opcoes: ['lá', 'aqui', 'aí', 'quem'],
        correta: 'aí',
      },
      {
        pergunta: 'O que significa あそこ?',
        opcoes: ['ali/lá', 'isto', 'escola', 'banheiro'],
        correta: 'ali/lá',
      },
      {
        pergunta: 'O que significa どこ?',
        opcoes: ['onde', 'quem', 'o quê', 'aqui'],
        correta: 'onde',
      },
      {
        pergunta: 'O que significa こちら?',
        opcoes: ['aqui (formal)', 'aí (formal)', 'lá (formal)', 'livro'],
        correta: 'aqui (formal)',
      },
      {
        pergunta: 'O que significa そちら?',
        opcoes: ['lá (formal)', 'aí (formal)', 'isto', 'escola'],
        correta: 'aí (formal)',
      },
      {
        pergunta: 'O que significa あちら?',
        opcoes: ['aqui (formal)', 'aí (formal)', 'lá (formal)', 'hospital'],
        correta: 'lá (formal)',
      },
      {
        pergunta: 'O que significa がっこう?',
        opcoes: ['hospital', 'escola', 'banheiro', 'amigo'],
        correta: 'escola',
      },
      {
        pergunta: 'O que significa びょういん?',
        opcoes: ['hospital', 'escola', 'bolsa', 'livro'],
        correta: 'hospital',
      },
      {
        pergunta: 'O que significa コンビニ?',
        opcoes: [
          'loja de conveniência',
          'dicionário',
          'guarda-chuva',
          'professor',
        ],
        correta: 'loja de conveniência',
      },
      {
        pergunta: 'O que significa トイレ?',
        opcoes: ['banheiro', 'hospital', 'livro', 'onde'],
        correta: 'banheiro',
      },
    ],
  },

  {
    id: 3,
    titulo: 'だれ・なんさい・〜の (Pessoas e posse)',
    vocabulario: [
      { japones: 'だれ', leitura: 'dare', portugues: 'quem' },
      { japones: 'どなた', leitura: 'donata', portugues: 'quem (formal)' },
      { japones: 'なんさい', leitura: 'nansai', portugues: 'quantos anos' },
      { japones: 'さい', leitura: 'sai', portugues: 'anos de idade' },
      { japones: 'わたし', leitura: 'watashi', portugues: 'eu' },
      { japones: 'ともだち', leitura: 'tomodachi', portugues: 'amigo' },
      { japones: 'せんせい', leitura: 'sensei', portugues: 'professor' },
      { japones: 'がくせい', leitura: 'gakusei', portugues: 'estudante' },
      { japones: 'にほんご', leitura: 'nihongo', portugues: 'japonês' },
      { japones: '〜の', leitura: 'no', portugues: 'partícula de posse' },
    ],
    exercicios: [
      {
        pergunta: 'O que significa だれ?',
        opcoes: ['quem', 'onde', 'o quê', 'amigo'],
        correta: 'quem',
      },
      {
        pergunta: 'O que significa どなた?',
        opcoes: ['quem (formal)', 'aqui', 'professor', 'livro'],
        correta: 'quem (formal)',
      },
      {
        pergunta: 'O que significa なんさい?',
        opcoes: ['quantos anos', 'onde', 'japonês', 'hospital'],
        correta: 'quantos anos',
      },
      {
        pergunta: 'O que significa さい?',
        opcoes: ['anos de idade', 'quem', 'escola', 'isto'],
        correta: 'anos de idade',
      },
      {
        pergunta: 'O que significa わたし?',
        opcoes: ['eu', 'amigo', 'professor', 'aquilo'],
        correta: 'eu',
      },
      {
        pergunta: 'O que significa ともだち?',
        opcoes: ['amigo', 'livro', 'banheiro', 'onde'],
        correta: 'amigo',
      },
      {
        pergunta: 'O que significa せんせい?',
        opcoes: ['professor', 'estudante', 'hospital', 'dicionário'],
        correta: 'professor',
      },
      {
        pergunta: 'O que significa がくせい?',
        opcoes: ['estudante', 'professor', 'amigo', 'escola'],
        correta: 'estudante',
      },
      {
        pergunta: 'O que significa にほんご?',
        opcoes: ['japonês', 'livro', 'quem', 'aqui'],
        correta: 'japonês',
      },
      {
        pergunta: 'O que significa 〜の?',
        opcoes: ['partícula de posse', 'quantos anos', 'banheiro', 'hospital'],
        correta: 'partícula de posse',
      },
    ],
  },
];

export default licoes;
