/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigationPage from "../components/NavigationPage";

//components
import Loading from "../components/Loading";
import Image from "../components/Image";

//lib
import infoDiv from "../assets/lib/infoDiv";

//context
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const anchorUp = useRef();
  const anchorDown = useRef();
  const { name, limit, skip, formatImg, setDimDiv, setCount } = useStateFunc();
  console.log(
    "name, limit, skip, formatImg in /comics:",
    name,
    limit,
    skip,
    formatImg
  );

  useEffect(() => {
    const fetchData = async () => {
      //essayer une requete get
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/appmarv/comics?title=${name}&limit=${limit}&skip=${skip}`
        );
        console.log("%cdata Comics:", "color:red", response.data);
        console.log("%cresponse Comics:", "color:red", response);
        //si response
        if (response) {
          const data = response?.data?.dataMarv?.data;
          //mettre a jour la valeur du state data avec le retour de la response.data
          console.log("data in home:", data);
          const newData = [...data];
          const filterImg = newData?.filter(
            (card) =>
              !card.thumbnail.path.includes("image_not_available") &&
              !card.thumbnail.extension.includes("gif")
          );
          const counter = response?.data?.dataMarv?.count;
          setCount(counter);
          // console.log("filterImg:", filterImg);
          // console.log('data1:', data);
          setData(filterImg);
          //actualiser la valeur du loading à false
          setIsLoading(false);
        }
      } catch (error) {
        console.log("error.response:", error.response);
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
    <div className="boxComics">
      <section className="wrapper" id="top" ref={anchorUp}>
        <NavigationPage />
        {data.map((comic, key = data.id) => {
          const comicId = comic._id;
          // console.log("comic", comic);
          return (
            <Link to={`/comic/${comicId}`} key={key}>
              <div className="boxTitleDesc">
                <p className="title">{comic.title}</p>
                <p className="desc">{comic.description}</p>
              </div>
              <Image
                src={`${comic.thumbnail.path}/${formatImg}.${comic.thumbnail.extension}`}
                alt="comics"
              />
            </Link>
          );
        })}
      </section>
      <div id="bottom" ref={anchorDown}></div>
    </div>
  );
};

export default Comics;
