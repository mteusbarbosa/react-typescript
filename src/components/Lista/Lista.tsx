import style from './Lista.module.scss';
import Item from './Item/Item';

export default function Lista() {
  const itens = [
    { item: 'React', tempo: '00:02:00' },
    { item: 'Typescript', tempo: '01:00:00' },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {itens.map((itens, index) => (
          <Item key={index} {...itens} />
        ))}
      </ul>
    </aside>
  );
}
