import Image from "./Image";
import marvelLogo from "/imgs/marvelous.svg";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import BoxFiltersNbrCard from "./BoxFiltersNbrCard";
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const Header = ({ show, setShow }) => {
  const { name, setName, limit, setLimit, skip, setSkip, token, setToken } =
    useStateFunc();
  const navigate = useNavigate();
  return (
    <header>
      <div className="wrapper">
        <Link to="/" className="boxLogo">
          <Image src={marvelLogo} alt="marvel" />
        </Link>
        <div className="boxInput">
          <Input
            type="text"
            placeholder="search..."
            inputId="name"
            setState={setName}
            value={name}
          />
          <BoxFiltersNbrCard
            limit={limit}
            setLimit={setLimit}
            skip={skip}
            setSkip={setSkip}
          />
        </div>
        <nav>
          <ul>
            {token ? (
              <li>
                <button
                  onClick={() => {
                    Cookies.remove("MarvLogin");
                    setToken(null);
                    navigate("/");
                  }}
                  className="logout"
                >
                  <FontAwesomeIcon icon="right-from-bracket" />
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => {
                    {
                      show === false ? setShow(true) : setShow(false);
                    }
                  }}
                  className="iconsignup"
                >
                  <FontAwesomeIcon icon="user-plus" />
                </button>
                <Link to="/login" className="login">
                  <FontAwesomeIcon icon="right-to-bracket" />
                </Link>
              </li>
            )}
            {token ? (
              <>
                <li>
                  <Link to="/comics">Comics</Link>
                </li>
                <li>
                  <Link to="/">Characters</Link>
                </li>
                <li>
                  <Link to="/favorites">Favoris</Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
