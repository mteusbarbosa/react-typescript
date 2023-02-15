import React from 'react';
import style from './Button.module.scss';

export default class Button extends React.Component<{
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: string;
  onClick?: () => void;
}> {
  render() {
    const { type = 'button', onClick } = this.props;
    return (
      <button type={type} onClick={onClick} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}
