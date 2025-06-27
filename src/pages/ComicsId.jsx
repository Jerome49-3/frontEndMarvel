import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import Loading from "../components/Loading";

const ComicsId = () => {
  const { characterId } = useParams();
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //faire une function asynchrone
    const fetchData = async () => {
      //essayer une requete get
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_URL}/appmarv/comics/${characterId}`
        );
        console.log("data /comics/:characterId :", response.data);
        //si response
        if (response) {
          //mettre a jour la valeur du state data avec le retour de la response.data
          setComics(response.data.comics);
          console.log("data.comics:", comics);
          setIsLoading(false);
          //actualiser la valeur du loading à false
        }
      } catch (error) {
        console.log("error.response:", error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="wrapper">
        <div className="boxComicsChar">
          <div className="boxSlide">
            <div className="slide">
              {comics.map((comic, key = index) => {
                console.log("comic:", comic);
                return (
                  <article key={key}>
                    <img
                      src={`${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`}
                      alt="comics"
                    />
                    <h3>{comic.title}</h3>
                    {comic.description ? <p>{comic.description}</p> : <p></p>}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComicsId;
