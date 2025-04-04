import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Nav from "../Nav/Nav.jsx";
import Info from "../Info/Info.jsx";
import useMouseOver from "../../useMouseOver.jsx";
export default function Layout() {
  const  { x, y } = useMouseOver()
  return (
    <>
      {/* <Nav /> */}
      <div className="text-neutral-900 fixed top-5 left-5">
            Mouse Position: ({x}, {y})
        </div>
      {/* <Outlet /> */}
     
    </>
  );
}
