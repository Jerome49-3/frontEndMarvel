/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect, useRef } from "react";
import axios from "axios";

//components
import Loading from "../components/Loading";
import BoxCards from "../components/BoxCards";

//lib
import infoDiv from "../assets/lib/infoDiv";

const Home = ({
  name,
  limit,
  skip,
  fav,
  setFav,
  setSkip,
  page,
  setPage,
  // setShow,
  faStar,
  farStar,
  count,
  setCount,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [dimDiv, setDimDiv] = useState();
  const formatImg =
    "standard_amazing" ||
    "standard_fantastic" ||
    "standard_xlarge" ||
    "standard_large" ||
    "mg";
  const refDiv = useRef();
  // console.log('fav0', fav);
  //initialiser un useEffect pour effectuer une requete au chargement de la page
  useLayoutEffect(() => {
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
          console.log(
            "response.headers.getAccess-Control-Allow-Origin:",
            response.headers.get("Access-Control-Allow-Origin")
          );
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
          console.log("data2:", data);
          setCount(counter);
          console.log("count:", count);
          //actualiser la valeur du loading à false
          setIsLoading(false);
        }
        if (isLoading !== true) {
          infoDiv(refDiv, setDimDiv);
        }
      } catch (error) {
        console.log("error.response:", error.response);
      }
    };
    fetchData();
  }, [name, limit, skip]);
  console.log("dimDiv:", dimDiv);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="wrapper" id="top" ref={refDiv}>
        <BoxCards
          fav={fav}
          data={data}
          formatImg={formatImg}
          setFav={setFav}
          faStar={faStar}
          farStar={farStar}
          page={page}
          setPage={setPage}
          setSkip={setSkip}
          limit={limit}
          skip={skip}
          count={count}
        />
        {/* <Link to='#'>top</Link> */}
      </section>
    </>
  );
};

export default Home;
