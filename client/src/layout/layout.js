import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = () => {
  return (
    <div className="bg-main text-white">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
