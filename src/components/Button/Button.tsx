import style from './Button.module.scss';

export default function Button(props: { children: string }) {
  return <button className={style.botao}>{props.children}</button>;
}
