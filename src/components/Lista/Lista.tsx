import style from './Lista.module.scss';
import Item from './Item/Item';
import { ITarefas } from '../../types/tarefas';

export default function Lista({ tarefas }: { tarefas: ITarefas[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefas, index) => (
          <Item key={index} {...tarefas} />
        ))}
      </ul>
    </aside>
  );
}
