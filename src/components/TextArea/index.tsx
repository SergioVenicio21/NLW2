import React, { TextareaHTMLAttributes } from "react";
import "./style.css";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  ...textAreaProps
}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea {...textAreaProps} id={name} />
    </div>
  );
};

export default TextArea;
