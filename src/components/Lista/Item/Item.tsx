import style from '../Lista.module.scss';

export default function Item({ item, tempo }: { item: String; tempo: string }) {
  return (
    <li className={style.item}>
      <h3>{item}</h3>
      <span>{tempo}</span>
    </li>
  );
}
