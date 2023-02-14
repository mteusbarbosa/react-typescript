import './Lista.scss';

export default function Lista() {
  const itens = [
    { item: 'React', tempo: '00:02:00' },
    { item: 'Typescript', tempo: '01:00:00' },
  ];

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {itens.map((itens, index) => (
          <li key={index} className="item">
            <h3>{itens.item}</h3>
            <span>{itens.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
