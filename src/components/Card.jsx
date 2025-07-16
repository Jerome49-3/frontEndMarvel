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
          <h3>{card.name}</h3>
          {card.description ? <p>{card.description}</p> : <p>no information</p>}
        </div>
      </div>
      <div className="front">
        <Image
          src={`${card.thumbnail.path}/${formatImg}.${card.thumbnail.extension}`}
          alt="characters"
        />
        <div
          className="boxHearthMore"
          onClick={(e) => {
            e.preventDefault();
            setClassAnim("flipCardIn");
          }}
        >
          <button className="more">
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
      </div>
    </Link>
  );
};

export default Card;
