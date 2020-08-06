import React, { InputHTMLAttributes } from "react";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...inputProps }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" {...inputProps} id={name} />
    </div>
  );
};

export default Input;
