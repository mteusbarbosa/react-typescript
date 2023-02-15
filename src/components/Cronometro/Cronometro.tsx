import { useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/date';
import { ITarefas } from '../../types/tarefas';
import Button from '../Button/Button';
import Relogio from '../Cronometro/Relogio/Relogio';
import style from './Cronometro.module.scss';

interface Props {
  selecionado: ITarefas | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();
  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado.tempo));
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
