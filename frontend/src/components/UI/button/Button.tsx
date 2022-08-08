import React from "react";
import style from "./Button.module.scss";

interface IButtonProps {
  height: number;
  width: number;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      style={{ padding: `${props.height}px ${props.width}px ` }}
      className={style.button}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
