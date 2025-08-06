import { createContext, useState, useEffect } from "react";
export const StateContext = createContext();
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";

//lib
import addRemoveListener from "../assets/lib/addRemoveListener";
import setDimensions from "../assets/lib/setDimensions";

//fontAwesome

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
export const StateProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showNavUp, setShowNavUp] = useState(true);
  const [showNavDown, setShowNavDown] = useState(true);
  const [token, setToken] = useState(Cookies.get("MarvLogin") || null);
  const [dimDiv, setDimDiv] = useState();
  console.log("%cdimDiv:", "color: magenta", dimDiv);
  const [dimWindows, setDimWindows] = useState();
  const [path, setPath] = useState("");
  console.log("%cdimWindows:", "color: green", dimWindows);
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
  // console.log("token", token);

  //****************************************** //
  //************* format img ***************** //
  //****************************************** //

  const formatImg =
    "standard_amazing" ||
    "standard_fantastic" ||
    "standard_xlarge" ||
    "standard_large" ||
    "mg";

  //****************************************** //
  //********** location.pathname ************* //
  //****************************************** //

  let location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  //****************************************** //
  //********** listen event resize *********** //
  //****************************************** //

  useEffect(() => {
    return addRemoveListener("resize", () => setDimensions(setDimWindows));
  }, [location.pathname]);

  useEffect(() => {
    return addRemoveListener("load", () => setDimensions(setDimWindows));
  }, [location.pathname]);

  //****************************************** //
  //********** listen scroll ***************** //
  //****************************************** //

  useEffect(() => {
    return addRemoveListener("scroll", () => {
      // console.log("scroll", e);
      const scrollY = window.scrollY;
      // console.log("scrollY", scrollY);
      setScrollY(scrollY);
    });
  });

  return (
    <StateContext.Provider
      value={{
        formatImg,
        name,
        setName,
        limit,
        setLimit,
        skip,
        setSkip,
        page,
        setPage,
        scrollY,
        setScrollY,
        showNavUp,
        setShowNavUp,
        showNavDown,
        setShowNavDown,
        token,
        setToken,
        dimWindows,
        setDimWindows,
        dimDiv,
        setDimDiv,
        fav,
        setFav,
        count,
        setCount,
        faChevronUp,
        faChevronDown,
        faStar,
        farStar,
        faEye,
        faEyeSlash,
        path,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
