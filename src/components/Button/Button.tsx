import style from './Button.module.scss';

export default function Button(props: any) {
  return <button className={style.botao}>{props.children}</button>;
}
