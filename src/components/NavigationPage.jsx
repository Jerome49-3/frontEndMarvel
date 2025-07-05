import Button from "./Button";
import handleBackPage from "../assets/lib/moveToPage/handleBackPage.js";
import handleAddPage from "../assets/lib/moveToPage/handleAddPage";
import { useStateFunc } from "../assets/lib/context/useStateFunc";

const NavigationPage = () => {
  const { page, setPage, setSkip, limit, skip, count, path } = useStateFunc();
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
        <div className="boxSeePage">
          <div>{path}</div>
        </div>
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

export default NavigationPage;
