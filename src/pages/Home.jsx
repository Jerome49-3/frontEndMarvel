/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import Loading from "../components/Loading";

const Home = ({
  name,
  limit,
  skip,
  fav,
  setFav,
  setSkip,
  page,
  setPage,
  setShow,
  count,
  setCount,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const formatImg =
    "standard_amazing" ||
    "standard_fantastic" ||
    "standard_xlarge" ||
    "standard_large";
  // console.log('fav0', fav);
  //initialiser un useEffect pour effectuer une requete au chargement de la page
  useEffect(() => {
    //faire une function asynchrone
    const fetchData = async () => {
      //essayer une requete get
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/appmarv/characters?name=${name}&limit=${limit}&skip=${skip}`
        );
        console.log("response?.data in Home:", response?.data);
        //si response
        if (response) {
          //mettre a jour la valeur du state data avec le retour de la response.data
          const data = response?.data?.dataMarv?.data;
          console.log("data1:", data);
          const newData = [...data];
          console.log("newData:", newData);
          const filterImg = newData.filter(
            (card) =>
              !card.thumbnail.path.includes("image_not_available") &&
              !card.thumbnail.extension.includes("gif")
          );
          console.log("filterImg:", filterImg);
          const counter = response?.data?.dataMarv?.count;
          // console.log('data1:', data);
          setData(filterImg);
          // console.log('data2:', data);
          setCount(counter);
          console.log("count:", count);
          //actualiser la valeur du loading à false
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error.response:", error.response);
      }
    };
    fetchData();
  }, [name, limit, skip]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main>
        <section className="wrapper" id="top">
          <div
            className={page > 0 ? "arrLeftTop" : "hide"}
            onClick={() => {
              console.log("page:", page);
              //au click, j'incrémente de 1
              const newPage = page - 1;
              console.log("newPage:", newPage);
              //j'ajoute la valeur au useState Page
              setPage(newPage);
              // je multiplie la valeur de page par le nombre limit
              const movPage = newPage * limit;
              console.log("movPage:", movPage);
              setSkip(movPage);
            }}
          >
            <FontAwesomeIcon icon="chevron-left" />
          </div>
          <div
            className={skip < count ? "arrRightTop" : "hide"}
            onClick={() => {
              console.log("page:", page);
              //au click, j'incrémente de 1
              const newPage = page + 1;
              console.log("newPage:", newPage);
              //j'ajoute la valeur au useState Page
              setPage(newPage);
              // je multiplie la valeur de page par le nombre limit
              const movPage = newPage * limit;
              console.log("movPage:", movPage);
              setSkip(movPage);
            }}
          >
            <FontAwesomeIcon icon="chevron-right" />
          </div>
          <div className="boxArticles">
            {data.map((card, key = card._id) => {
              // console.log('card:', card, 'cardId:', card._id);
              const characterId = card._id;
              return (
                <div className="boxCardFav" key={key}>
                  <Link to={`/character/${characterId}`}>
                    <div className="back">
                      <h3>{card.name}</h3>
                      {/* <p>{card._id}</p> */}
                      {card.description ? <p>{card.description}</p> : <p></p>}
                    </div>
                    <div className="front">
                      <img
                        src={`${card.thumbnail.path}/${formatImg}.${card.thumbnail.extension}`}
                        alt="characters"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      //je crée un clone de mon useState Fav;
                      const newFav = [...fav];
                      //au click, je stringify l'object card
                      const newCard = JSON.stringify(card);
                      // console.log('newCard:', newCard);
                      // je l'ajoute au tableau clone de fav
                      newFav.push(fav + newCard);
                      // console.log('newFav:', newFav)
                      //je l'ajoute à mon useState fav
                      setFav(newFav);
                      console.log("newFav:", fav);
                      //je crée un cookie avec la valeur de fav
                      Cookies.set("FavComics", fav, {
                        expires: 15,
                        secure: true,
                      });
                    }}
                  >
                    {/* mettre des icones coeur vide puis plein au click */}
                    favoris
                  </button>
                </div>
              );
            })}
          </div>
          {/* <Link to='#'>top</Link> */}
        </section>
      </main>
    </>
  );
};

export default Home;
