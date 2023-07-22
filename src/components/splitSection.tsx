import { CSSProperties, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
export default function SplitSection({ children, className = "", style }: IProps) {
  return (
    <div className={`flex flex-col sm:flex-row bg-pale ${className}`} style={style}>
      {children}
    </div>
  );
}
