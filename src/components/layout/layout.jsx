import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Nav from "../Nav/Nav.jsx";
import Info from "../Info/Info.jsx";
export default function Layout() {
  return (
    <>
      {/* <Nav /> */}
      <Outlet />
      {/* <Info /> */}
      {/* <Footer /> */}
    </>
  );
}
