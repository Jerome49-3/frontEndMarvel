import Header from "../components/Header";
import Footer from "../components/Footer";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = ({
  show,
  setShow,
  name,
  setName,
  limit,
  token,
  setToken,
  setLimit,
  skip,
  setSkip,
}) => {
  return (
    <Fragment>
      <Header
        name={name}
        setName={setName}
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
        show={show}
        setShow={setShow}
        token={token}
        setToken={setToken}
        autocomplete="on"
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
