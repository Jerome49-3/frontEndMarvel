import { Fragment } from "react";
import { Outlet } from "react-router-dom";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavigationScrollDown from "../components/NavigationScrollDown";
import NavgationScrollUp from "../components/NavigationScrollUp";

const MainLayout = ({ show, setShow }) => {
  return (
    <Fragment>
      <Header show={show} setShow={setShow} />
      <main>
        <NavigationScrollDown />
        <Outlet />
        <NavgationScrollUp />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
