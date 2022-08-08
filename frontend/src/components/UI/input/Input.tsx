import React, { ChangeEvent, MutableRefObject } from "react";
import style from "./Input.module.scss";

interface IInputProps {
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  ref?: MutableRefObject<HTMLInputElement | null>;
}

const Input: React.FC<IInputProps> = (props) => {
  return <input className={style.input} type="search" {...props} />;
};

export default Input;
