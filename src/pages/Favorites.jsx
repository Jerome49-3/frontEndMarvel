import { useStateFunc } from "../assets/lib/context/useStateFunc";
import BoxCards from "../components/BoxCards";
import Links from "../components/Links";
import { Navigate } from "react-router-dom";

const Favorites = () => {
  const { fav, data, formatImg, setFav, faStar, farStar, token } =
    useStateFunc();
  return !token ? (
    <Navigate to="/login" />
  ) : (
    <div className="boxFavorites">
      <div className="wrapper">
        {fav.length > 0 ? (
          <BoxCards
            fav={fav}
            data={data}
            formatImg={formatImg}
            setFav={setFav}
            faStar={faStar}
            farStar={farStar}
          />
        ) : (
          <div className="boxNoPurchases">
            <p> Vous n'avez pas d'offres en favoris:</p>
            <Links path="/" linkText="Consultez nos offres disponibles" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
