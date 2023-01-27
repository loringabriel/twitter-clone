import React, { HTMLAttributes } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  onClick,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-gray-700 text-slate-400 font-semibold hover:text-white py-2 px-4 border border-slate-400 hover:border-transparent rounded"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
