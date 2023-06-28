import React from "react";

interface Props {
  children: string;
//   for any optional property write ? after it
  color?: 'primary' | 'secondary' | 'danger';
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
