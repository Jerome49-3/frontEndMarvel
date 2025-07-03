import { useLocation } from "react-router-dom";
import Button from "./Button";
import handleBackPage from "../assets/lib/handleBackPage";
import handleAddPage from "../assets/lib/handleAddPage";

const Navigation = ({ page, setPage, setSkip, limit, skip, count }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="boxNavigation">
      {page > 0 ? (
        <Button
          classButton="arrLeftTop"
          handleClick={() => handleBackPage(page, setPage, limit, setSkip)}
          icon="chevron-left"
        />
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
        <Button
          classButton="arrRightTop"
          handleClick={() => handleAddPage(page, setPage, limit, setSkip)}
          icon="chevron-right"
        />
      ) : (
        <div className="arrhide"></div>
      )}
    </div>
  );
};

export default Navigation;
