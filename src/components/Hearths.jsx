/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const Hearths = ({ card }) => {
  // console.log("fav inside Hearths:", fav);
  // console.log("card inside Hearths:", card);
  const [isFavorite, setIsFavorite] = useState();
  const heartsRefs = useRef({});

  const { faStar, farStar, fav, setFav } = useStateFunc();

  useEffect(() => {
    if (fav && Array.isArray(fav)) {
      // console.log("fav inside useEffect to Hearths:", fav);
      const inFavorite = fav.some((favArticle) => favArticle._id === card._id);
      if (inFavorite) {
        setIsFavorite(inFavorite);
      }
    }
  }, [fav]);
  // console.log("isFavorite after useEffect in BoxHearth:", isFavorite);
  const handleToggle = (e, card) => {
    // console.log("card in handleToggle:", card);
    e.preventDefault();

    const heartEmpty = heartsRefs.current[`${card._id}-heartEmpty`];
    const heartFull = heartsRefs.current[`${card._id}-heartFull`];

    if (heartEmpty && heartFull) {
      heartEmpty.classList.toggle("show");
      heartFull.classList.toggle("hide");
      heartFull.classList.toggle("show");
      heartEmpty.classList.toggle("hide");
    }
    // const favIsArray = Array.isArray(fav);
    // console.log("favIsArray:", favIsArray);
    // create ref object who contain ref of each article
    // const isFavorite = fav.some((favArticle) => favArticle._id === article._id);
    // console.log("isFavorite in handleToggle:", isFavorite);
    let newFav;
    if (isFavorite) {
      // Remove article
      newFav = fav.filter((favArticle) => favArticle._id !== card._id);
      // console.log("newFav in if:", newFav);
    } else {
      // Add article
      newFav = [...fav, card];
      // console.log("newFav in else:", newFav);
    }
    setFav(newFav);
    // console.log("fav in else:", fav);
    localStorage.setItem("favCardMarvel", JSON.stringify(newFav));
  };

  return (
    <React.Fragment>
      <button onClick={(e) => handleToggle(e, card)}>
        <FontAwesomeIcon
          icon={faStar}
          className={isFavorite === true ? "show" : "hide"}
          ref={(el) => (heartsRefs.current[`${card._id}-heartFull`] = el)}
        />
        <FontAwesomeIcon
          icon={farStar}
          className={isFavorite === true ? "hide" : "show"}
          ref={(el) => (heartsRefs.current[`${card._id}-heartEmpty`] = el)}
        />
        {/* <div>{card?.isFavorite}</div> */}
      </button>
    </React.Fragment>
  );
};

export default Hearths;
