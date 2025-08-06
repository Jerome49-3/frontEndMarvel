/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

//components
import Loading from "../components/Loading";

const CharacterId = () => {
  const { characterId } = useParams();
  // console.log('characterId', characterId);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/appmarv/character/${characterId}`
        );
        console.log("data /character/:characterId :", response?.data);
        if (response) {
          setData(response?.data);
          console.log("data on fetchData:", data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error.response:", error?.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="boxCharacterId">
      <div className="wrapper">
        <article className="card">
          <div className="titleCard">
            <h3>{data.name}</h3>
          </div>
          <div className="bodyCard">
            <img
              src={`${data.thumbnail.path}/standard_xlarge.${data.thumbnail.extension}`}
              alt="comics"
            />
            {data.description ? <p>{data.description}</p> : <p></p>}
            {data.comics.length === 0 ? (
              <div className="linkComicsChar">
                <Link to={`/comics/${characterId}`}>Tout ses comics</Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default CharacterId;
