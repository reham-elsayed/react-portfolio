import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const show = window.scrollY > 50;
    console.log(show);
    if (show) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleNavBar = () => {
    console.log("toggle");
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div
      className={`sticky top-0 z-10  flex text-white transition-all duration-150 bg-neutral-600 text-xl ${isScrolled == true ? "py-5" : "py-8"}`}
    >
      <div className="container mx-auto px-4  flex-wrap  md:flex justify-between ">
        <div className="text-3xl text-start ">
          <Link className="text-white hover:text-white" to={"/home"}>
            {" "}
            START FRAMEWORK{" "}
          </Link>
        </div>
        <div
          className={`justify-between  md:flex ${isOpen == false ? "hidden" : ""}`}
        >
          <ul className="flex-wrap text-start gap-5 md:flex justify-between">
            <li className="py-5 md:py-0">
              <Link className="text-white hover:text-white" to={"/about"}>
                {" "}
                about{" "}
              </Link>
            </li>
            <li className="py-5 md:py-0">
              <Link className="text-white hover:text-white" to={"/portfolio"}>
                {" "}
                portfolio{" "}
              </Link>
            </li>
            <li className="py-5 md:py-0">
              <Link className="text-white hover:text-white" to={"/contact"}>
                {" "}
                contact
              </Link>
            </li>
          </ul>
        </div>{" "}
      </div>
      <div className="md:hidden">
        <button className="bg-inherit" onClick={toggleNavBar}>
          <i
            className={`${isOpen == false ? "fa fa-bars text-4xl" : "fa fa-close text-4xl"}`}
          ></i>
        </button>
      </div>
    </div>
  );
}
