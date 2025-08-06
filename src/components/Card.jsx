import { useState } from "react";
import Hearths from "./Hearths";
import { Link } from "react-router-dom";
import { useStateFunc } from "../assets/lib/context/useStateFunc";
import Image from "./Image";

const Card = ({ characterId, card }) => {
  const { fav, setFav, faStar, farStar, formatImg } = useStateFunc();
  const [classAnim, setClassAnim] = useState("");
  return (
    <Link
      to={`/character/${characterId}`}
      className={classAnim}
      onMouseLeave={() => {
        setClassAnim("");
      }}
    >
      <div className="back">
        <div className="boxBackInner">
          {card.description ? <p>{card.description}</p> : <p>no information</p>}
        </div>
      </div>
      <div className="front">
        <Image
          src={`${card.thumbnail.path}/${formatImg}.${card.thumbnail.extension}`}
          alt="characters"
        />
        <div className="cardTitle">
          <h3>{card.name}</h3>
        </div>
        <button
          className="more"
          onClick={(e) => {
            e.preventDefault();
            setClassAnim("flipCardIn");
          }}
        >
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </button>
        <Hearths
          fav={fav}
          setFav={setFav}
          faStar={faStar}
          farStar={farStar}
          card={card}
        />
      </div>
    </Link>
  );
};

export default Card;
