import { useLocation } from "react-router-dom";

import Navigation from "./Navigation";
import Card from "./Card";

const BoxCard = ({
  fav,
  data,
  setFav,
  faStar,
  farStar,
  page,
  setPage,
  setSkip,
  limit,
  skip,
  count,
}) => {
  const location = useLocation();
  const formatImg =
    "standard_amazing" ||
    "standard_fantastic" ||
    "standard_xlarge" ||
    "standard_large" ||
    "mg";

  return (
    <div className="BoxCards">
      <Navigation
        page={page}
        setPage={setPage}
        setSkip={setSkip}
        limit={limit}
        skip={skip}
        count={count}
      />
      {(location.pathname === "/favorites" ? fav : data)?.map(
        (card, key = card._id) => {
          const characterId = card._id;
          return (
            <div className="boxCardFav" key={key}>
              <Card
                fav={fav}
                setFav={setFav}
                faStar={faStar}
                farStar={farStar}
                characterId={characterId}
                formatImg={formatImg}
                card={card}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default BoxCard;
