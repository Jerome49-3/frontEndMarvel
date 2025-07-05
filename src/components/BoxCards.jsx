//components
import NavigationPage from "./NavigationPage";
import Card from "./Card";
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const BoxCard = ({ data }) => {
  const { fav, path } = useStateFunc();

  return (
    <>
      <div className="BoxCards">
        <NavigationPage />
        {(path === "/favorites" ? fav : data)?.map((card, key = card._id) => {
          const characterId = card._id;
          return (
            <div className="boxCardFav" key={key}>
              <Card characterId={characterId} card={card} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BoxCard;
