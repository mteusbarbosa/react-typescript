import style from './Lista.module.scss';
import Item from './Item/Item';
import { ITarefas } from '../../types/tarefas';

interface Props {
  tarefas: ITarefas[];
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefas) => (
          <Item
            key={tarefas.id}
            {...tarefas}
            selecionaTarefa={selecionaTarefa}
          />
        ))}
      </ul>
    </aside>
  );
}
