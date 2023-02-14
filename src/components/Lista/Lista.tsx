import style from './Lista.module.scss';
import Item from './Item/Item';
import { useState } from 'react';

export default function Lista() {
  const [tarefas, setTarefas] = useState([
    { item: 'React', tempo: '00:02:00' },
    { item: 'Typescript', tempo: '01:00:00' },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([
            ...tarefas,
            { item: 'Estudar estado', tempo: '05:00:00' },
          ]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((tarefas, index) => (
          <Item key={index} {...tarefas} />
        ))}
      </ul>
    </aside>
  );
}
