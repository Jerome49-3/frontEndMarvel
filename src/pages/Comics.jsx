import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Pagination from '../components/Pagination';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import Loading from "../components/Loading";

const Comics = ({ name, limit, skip, setSkip, page, setPage }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //essayer une requete get
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/appmarv/comics?title=${name}&limit=${limit}&skip=${skip}`
        );
        console.log("data Comics:", response.data);
        //si response
        if (response) {
          //mettre a jour la valeur du state data avec le retour de la response.data
          setData(response.data);
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
    <main>
      <div className="wrapper">
        {/* <Pagination page={page} setPage={setPage} setSkip={setSkip} /> */}
        <div className="boxComics">
          {data.map((comic, key = data.id) => {
            const comicId = comic._id;
            console.log("comic", comic);
            return (
              <Link to={`/comic/${comicId}`} key={key}>
                <div>{comic.title}</div>
                <img
                  src={`${comic.thumbnail.path}/standard_xlarge.${comic.thumbnail.extension}`}
                  alt="comics"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Comics;
