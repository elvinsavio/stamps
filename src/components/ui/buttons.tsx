import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function Button({ children, onClick, className = "" }: IProps) {
  return (
    <button
      className={`bg-red-shade w-fit p-2 px-3 shadow-lg transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
