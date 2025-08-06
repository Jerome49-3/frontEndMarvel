/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect, useRef, useEffect } from "react";
import axios from "axios";

//components
import Loading from "../components/Loading";
import BoxCards from "../components/BoxCards";
//lib
import infoDiv from "../assets/lib/infoDiv";

//context
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const Home = () => {
  const { name, limit, skip, setCount, setDimDiv } = useStateFunc();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const anchorUp = useRef();
  const anchorDown = useRef();

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
          // console.log("newData:", newData);
          const filterImg = newData.filter(
            (card) =>
              !card.thumbnail.path.includes("image_not_available") &&
              !card.thumbnail.extension.includes("gif")
          );
          // console.log("filterImg:", filterImg);
          const counter = response?.data?.dataMarv?.count;
          // console.log('data1:', data);
          setData(filterImg);
          console.log("data filtered:", data);
          setCount(counter);
          // console.log("count:", count);
          //actualiser la valeur du loading à false
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error on Home:", error);
        console.log("error.response on Home:", error?.response);
      }
    };
    fetchData();
  }, [name, limit, skip]);

  useLayoutEffect(() => {
    if (
      isLoading !== true &&
      anchorUp.current !== undefined &&
      anchorDown.current !== undefined
    ) {
      infoDiv(anchorUp, anchorDown, setDimDiv);
    }
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="boxHome">
      <section className="wrapper" id="top" ref={anchorUp}>
        <BoxCards data={data} />
      </section>
      <div id="bottom" ref={anchorDown}></div>
    </div>
  );
};

export default Home;
