import { useStateFunc } from "../assets/lib/context/useStateFunc";
import handleMoveToTop from "../assets/lib/moveToBottomOrUp/handleMoveToTop";
import Button from "./Button";

const NavigationScrollUp = () => {
  const {
    faChevronUp,
    dimDiv,
    setShowNavUp,
    setShowNavDown,
    dimWindows,
    scrollY,
  } = useStateFunc();
  console.log("%cdimWindows in NavigationScrollUp", "color: cyan", dimWindows);
  console.log("%cdimDiv in NavigationScrollUp", "color: cyan", dimDiv);
  console.log("%cscrollY in NavigationScrollUp", "color: cyan", scrollY);
  console.log(
    "%ctypeof scrollY in NavigationScrollUp",
    "color: cyan",
    typeof scrollY
  );
  const anchorUpY = dimDiv?.anchorDownY;
  console.log("%canchorDownY in NavigationScrollUp", "color: cyan", anchorUpY);
  const anchorUpYHalf = anchorUpY / 1.15;
  const anchorUpTiers = anchorUpY / 3.5;
  console.log(
    "%canchorDownYHalf in NavigationScrollUp",
    "color: cyan",
    anchorUpYHalf
  );
  return (
    <>
      {dimWindows?.width < 768 ? (
        <>
          {scrollY > anchorUpTiers && scrollY < anchorUpYHalf && (
            <>
              <Button
                icon={faChevronUp}
                handleClick={(e) => {
                  e.preventDefault();
                  console.log(
                    "%cdimDiv in handleMoveToTop:",
                    "color: magenta",
                    dimDiv
                  );
                  try {
                    scrollTo(dimDiv.anchorUpX, dimDiv.anchorUpY);
                  } catch (error) {
                    console.log(
                      "error in handleMoveToTop:",
                      "color: red",
                      error
                    );
                  }
                }}
                classButton="btnChevronUp"
              />
            </>
          )}
        </>
      ) : (
        <>
          {scrollY > anchorUpTiers && scrollY < anchorUpY && (
            <Button
              icon={faChevronUp}
              handleClick={(e) =>
                handleMoveToTop(e, dimDiv, setShowNavUp, setShowNavDown)
              }
              classButton="btnChevronUp"
            />
          )}
        </>
      )}
    </>
  );
};

export default NavigationScrollUp;
