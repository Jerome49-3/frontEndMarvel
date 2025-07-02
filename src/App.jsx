import "./assets/scss/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faRightToBracket,
  faUserPlus,
  faHeart,
  faEye,
  faEyeSlash,
  faChevronRight,
  faChevronLeft,
  faStar,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faUserPlus,
  faRightToBracket,
  faRightFromBracket,
  faHeart,
  faEye,
  faEyeSlash,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faStar
);
import Cookies from "js-cookie";

//pages
import Home from "./pages/Home";
import CharacterId from "./pages/CharacterId";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favorites from "./pages/Favorites";

//components
import Header from "./components/Header";
import ComicsId from "./pages/ComicsId";
import Signup from "./components/Signup";
import Login from "./pages/Login";

function App() {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(Cookies.get("MarvLogin") || null);
  const [fav, setFav] = useState(() => {
    const savedFav = localStorage.getItem("favCardMarvel");
    // console.log("savedFav in app:", savedFav);
    //if trythy
    if (savedFav) {
      try {
        const favStored = JSON.parse(savedFav);
        return favStored ? favStored : [];
      } catch (error) {
        //if null or undefined
        console.log("Erreur du parsing de savedFav:", error);
        return [];
      }
    }
    return [];
  });
  const [count, setCount] = useState(0);
  console.log("token", token);
  return (
    <>
      <Router>
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
        <Routes>
          {/* Get a list of characters */}
          <Route
            path="/"
            element={
              <Home
                name={name}
                limit={limit}
                skip={skip}
                fav={fav}
                setFav={setFav}
                setSkip={setSkip}
                setPage={setPage}
                page={page}
                show={show}
                setShow={setShow}
                count={count}
                setCount={setCount}
                faStar={faStar}
                farStar={farStar}
                faChevronUp={faChevronUp}
                faChevronDown={faChevronDown}
              />
            }
          />
          {/* Get a the infos of a specific character */}
          <Route path="/character/:characterId" element={<CharacterId />} />
          {/* Get a list of comics */}
          <Route
            path="/comics"
            element={
              <Comics
                name={name}
                limit={limit}
                skip={skip}
                fav={fav}
                setFav={setFav}
              />
            }
          />
          {/* Get a list of comics containing a specific character */}
          <Route path="/comics/:characterId" element={<ComicsId />} />
          {/* Get all informations of specific comic */}
          <Route path="/comic/:comicId" element={<Comic />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                fav={fav}
                faStar={faStar}
                farStar={farStar}
                token={token}
              />
            }
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
        </Routes>
        {show && (
          <Signup
            show={show}
            setShow={setShow}
            icon1="eye"
            icon2="eye-slash"
            token={token}
            setToken={setToken}
          />
        )}
      </Router>
    </>
  );
}

export default App;
