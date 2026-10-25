function BoasVindas({ onComecar }) {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: 40,
      }}
    >
      <h1 style={{ fontSize: 48, lineHeight: 1.2, color: '#1c1812', margin: 0 }}>藤の道</h1>
      <p style={{ color: '#3b3328', fontSize: 18, fontStyle: 'italic' }}>
        Fuji no Michi
      </p>
      <p
        style={{
          color: '#6e6150',
          fontSize: 15,
          maxWidth: 280,
          margin: '0 auto 32px',
        }}
      >
        Um caminho até a fluência — passo a passo, com a Yumi-sensei.
      </p>
      <button
        onClick={onComecar}
        style={{
          padding: '14px 32px',
          background: '#1c1812',
          color: '#efe5cf',
          border: 'none',
          borderRadius: 4,
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        はじめましょう · Começar
      </button>
    </div>
  );
}

export default BoasVindas;
