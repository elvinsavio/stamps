import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { config } from "../appConfig/appConfig";
import { shopConfig } from "../appConfig/shopConfig";

import logo from "../assets/images/logo-bnw.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-center px-2 text-white shadow-xl bg-primary font-georgia snap-start "
      style={{
        height: `${config.headerHeight}px`,
      }}
    >
      <div className="flex items-center justify-between w-full p-2 ">
        {/* defailt menu */}
        <Link onClick={() => navigate("/shop")} className="items-start justify-start hidden sm:flex-1 sm:flex ">
          Shop
        </Link>
        <Link onClick={() => navigate("/shop")} className="flex sm:hidden sm:flex-1">
          <ShopSvg />
        </Link>

        <Link onClick={() => navigate("/")} className="flex items-center justify-center flex-1 object-contain p-1">
          <img style={{ height: config.headerHeight - 12 }} src={logo} />
        </Link>

        <div className="justify-end flex-1 hidden gap-3 sm:flex">
          <button
            data-dropdown-toggle="dropdown-header-freebie"
            type="button"
            className="text-lg text-white cursor-pointer font-georgia"
          >
            Freebie
          </button>

          <div id="dropdown-header-freebie" className="z-10 hidden overflow-hidden shadow-lg bg-primary w-44">
            <ul className="">
              <MenuItem
                title={"Wallpaper"}
                onClick={() => navigate("/freebies?_=wallpaper")}
                className="pl-6 text-sm"
              />
            </ul>
          </div>

          <Link onClick={() => navigate("/blog")}>Blog</Link>
          <Link onClick={() => navigate("/about")}>About</Link>
        </div>

        {/* mobile dropdown */}
        <div className="flex sm:hidden">
          <button
            data-dropdown-toggle="dropdown-header-mobile"
            type="button"
            className="text-lg cursor-pointer font-georgia"
          >
            <MenuSvg />
          </button>
          <div
            id="dropdown-header-mobile"
            className="z-10 hidden w-screen overflow-hidden shadow-lg bg-primary font-mark"
          >
            <ul>
              <li className="block px-4 py-2 text-white hover:bg-black/60 ">Freebies</li>
              <MenuItem title={"Wallpaper"} onClick={() => null} className="pl-6 text-sm" />
            </ul>
            <ul>
              <MenuItem title={"Blog"} onClick={() => navigate("/blog")} />
              <MenuItem title="About" onClick={() => navigate("/about")} />
            </ul>
          </div>
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
    <a onClick={onClick} className={`text-lg font-georgia cursor-pointer flex ${className}`}>
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

const MenuItem = ({ title, onClick, className = "" }: { title: string; onClick: () => void; className?: string }) => {
  return (
    <li>
      <span onClick={onClick} className={`block px-4 py-2  hover:bg-black/60 text-white ${className}`}>
        {title}
      </span>
    </li>
  );
};
