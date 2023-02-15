import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/date';
import { ITarefas } from '../../types/tarefas';
import Button from '../Button/Button';
import Relogio from '../Cronometro/Relogio/Relogio';
import style from './Cronometro.module.scss';

interface Props {
  selecionado: ITarefas | undefined;
  finalizarTarefa: () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(String(selecionado.tempo)));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar</Button>
    </div>
  );
}
