import React, { SelectHTMLAttributes } from "react";
import "./style.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  options,
  ...selectProps
}) => {
  const showOptions = () => {
    return options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ));
  };
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select {...selectProps} id={name}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {showOptions()}
      </select>
    </div>
  );
};

export default Select;
