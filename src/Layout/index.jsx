import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
