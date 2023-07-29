import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
export default function Button({ children, className = "" }: IProps) {
  return (
    <button
      className={`bg-red-shade w-fit p-2 px-3 shadow-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
}
