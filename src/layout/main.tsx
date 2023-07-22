import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function MainLayout() {
  return (
    <div className="text-black flex flex-col  max-h-screen overflow-y-scroll scroll-smooth snap snap-y snap-mandatory">
      <Header />
      <div className="flex-1 ">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
