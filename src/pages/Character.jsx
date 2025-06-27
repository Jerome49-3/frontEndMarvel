import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

//components
import Loading from "../components/Loading";

const Character = () => {
  const { characterId } = useParams();
  // console.log('characterId', characterId);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [fav, setFav] = useState([]);
  // console.log('fav0', fav)
  //initialiser un useEffect pour effectuer une requete au chargement de la page
  useEffect(() => {
    //faire une function asynchrone
    const fetchData = async () => {
      //essayer une requete get
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/appmarv/character/${characterId}`
        );
        console.log("data /character/:characterId :", response.data);
        //si response
        if (response) {
          //mettre a jour la valeur du state data avec le retour de la response.data
          setData(response.data);
          console.log("data on fetchData:", data);
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
        <div className="boxCard">
          <article className="card">
            <h3>{data.name}</h3>
            <img
              src={`${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`}
              alt="comics"
            />
            {data.description ? <p>{data.description}</p> : <p></p>}
            {data.comics.length === 0 ? (
              <div className="linkComicsChar">
                <Link to={`/comics/${characterId}`}>Tout ses comics</Link>{" "}
              </div>
            ) : (
              <div></div>
            )}
          </article>
        </div>
      </div>
    </main>
  );
};

export default Character;
