import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Navigation = ({ page, setPage, setSkip, limit, skip, count }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="boxNavigation">
      {page > 0 ? (
        <button
          className="arrLeftTop"
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
        </button>
      ) : (
        <div className="arrhide"></div>
      )}
      {path === "/" ? (
        <div className="boxSeePage">
          <h1>Home</h1>
          <p>page: {page}</p>
        </div>
      ) : (
        <div>{path}</div>
      )}
      {skip < count ? (
        <button
          className="arrRightTop"
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
        </button>
      ) : (
        <div className="arrhide"></div>
      )}
    </div>
  );
};

export default Navigation;
