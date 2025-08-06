import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//components
import Loading from "../components/Loading";

const Comic = () => {
  const { comicId } = useParams();
  console.log("comicId", comicId);
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
          `${import.meta.env.VITE_REACT_APP_URL}/appmarv/comic/${comicId}`
        );
        console.log("data /comic/:comicId :", response?.data);
        //si response
        if (response) {
          //mettre a jour la valeur du state data avec le retour de la response.data
          setData(response?.data);
          //actualiser la valeur du loading à false
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error.response:", error.response);
      }
    };
    fetchData();
  }, [comicId]);

  return isLoading ? (
    <Loading />
  ) : (
    <main>
      <div className="wrapper">
        <div className="boxCard">
          <article className="card">
            <h3>{data.title}</h3>
            <img
              src={`${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`}
              alt="comics"
            />
            {data.description ? <p>{data.description}</p> : <p></p>}
          </article>
        </div>
      </div>
    </main>
  );
};

export default Comic;
