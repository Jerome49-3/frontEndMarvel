import { useStateFunc } from "../assets/lib/context/useStateFunc";
import handleMoveToBottom from "../assets/lib/moveToBottomOrUp/handleMoveToBottom";
import Button from "./Button";

const NavigationScrollDown = () => {
  const { faChevronDown, dimDiv, scrollY, dimWindows } = useStateFunc();
  // console.log("%cdimWindows in navScrollDown", "color: yellow", dimWindows);
  // console.log("%cdimDiv in navScrollDown", "color: yellow", dimDiv);
  // console.log("%cscrollY in navScrollDown", "color: yellow", scrollY);
  // console.log(
  //   "%ctypeof scrollY in navScrollDown",
  //   "color: yellow",
  //   typeof scrollY
  // );
  const anchorDownY = dimDiv?.anchorDownY;
  // console.log("%canchorDownY in navScrollDown", "color: yellow", anchorDownY);
  const anchorDownYHalf = anchorDownY / 2;
  // console.log(
  //   "%canchorDownYHalf in navScrollDown",
  //   "color: yellow",
  //   anchorDownYHalf
  // );

  return (
    <>
      {dimWindows?.width < 768 ? (
        <>
          {scrollY > 500 && scrollY < anchorDownYHalf && (
            <Button
              icon={faChevronDown}
              handleClick={(e) => handleMoveToBottom(e, dimDiv)}
              classButton="btnChevronDown"
            />
          )}
        </>
      ) : (
        <>
          {scrollY > 150 && scrollY < anchorDownYHalf && (
            <Button
              icon={faChevronDown}
              handleClick={(e) => handleMoveToBottom(e, dimDiv)}
              classButton="btnChevronDown"
            />
          )}
        </>
      )}
    </>
  );
};

export default NavigationScrollDown;
