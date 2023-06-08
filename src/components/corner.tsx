import React, { FC } from "react";

interface CornerProps {
  className: string;
}
export const Corner: FC<CornerProps> = ({ className }) => {
  return (
    <svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      height={20}
      width={20}
      className={className}
    >
      <defs></defs>
      <path className="cls-1" d="M10,0A10,10,0,0,0,0,10V0Z" />
    </svg>
  );
};
