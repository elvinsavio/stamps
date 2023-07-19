import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-primary font-georgia  px-2 py-5 flex justify-center">
      <div className="flex justify-between items-center max-w-screen-xl w-full">
        <Link onClick={() => navigate("/shop")} className="hidden sm:flex">
          Shop
        </Link>
        <Link onClick={() => navigate("/shop")} className="flex sm:hidden">
          <ShopSvg />
        </Link>

        <Link onClick={() => navigate("/")}>Logo</Link>

        <div className="gap-3 hidden sm:flex">
          <Link onClick={() => navigate("/freebie")}>Freebie</Link>
          <Link onClick={() => navigate("/blog")}>Blog</Link>
          <Link onClick={() => navigate("/about")}>About</Link>
        </div>
        <div className="flex sm:hidden">
          <MenuSvg />
        </div>
      </div>
    </div>
  );
}

const Link = ({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <a onClick={onClick} className={`text-xl font-georgia cursor-pointer ${className}`}>
      {children}
    </a>
  );
};

const ShopSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6 22q-.825 0-1.413-.588T4 20V8q0-.825.588-1.413T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.588 1.413T18 22H6Zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.713-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.713-.288T8 10V8H6v12Zm4-14h4q0-.825-.588-1.413T12 4q-.825 0-1.413.588T10 6ZM6 20V8v12Z"
      />
    </svg>
  );
};

const MenuSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
    </svg>
  );
};