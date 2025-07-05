const infoDiv = (anchorUp, anchorDown, setDimDiv) => {
  try {
    const getDimAnchorUp = anchorUp.current.getBoundingClientRect();
    console.log("%cgetDimAnchorUp:", "color: magenta", getDimAnchorUp);
    const getDimAnchorDown = anchorDown.current.getBoundingClientRect();
    console.log("%cgetDimAnchorDown:", "color: orangered", getDimAnchorDown);
    const anchorUpHeight = getDimAnchorUp.height;
    console.log("%canchorUpHeight:", "color: magenta", anchorUpHeight);
    const anchorUpWidth = getDimAnchorUp.width;
    console.log("%canchorUpWidth:", "color: magenta", anchorUpWidth);
    const anchorUpX = getDimAnchorUp.x;
    console.log("%canchorUpX:", "color: magenta", anchorUpX);
    const anchorUpY = getDimAnchorUp.y;
    console.log("%canchorUpY:", "color: magenta", anchorUpY);
    const anchorDownX = getDimAnchorDown.x;
    console.log("%canchorDownX:", "color: orangered", anchorDownX);
    const anchorDownY = getDimAnchorDown.y;
    console.log("%canchorDownY:", "color: orangered", anchorDownY);
    if (
      anchorUpX !== undefined &&
      anchorUpY !== undefined &&
      anchorDownX !== undefined &&
      anchorDownY !== undefined
    ) {
      setDimDiv({
        anchorUpAddVariableCssHeight:
          document.documentElement.style.setProperty(
            "--anchorUpHeight",
            anchorUpHeight + "px"
          ),
        anchorUpAddVariableCssWidth: document.documentElement.style.setProperty(
          "--anchorUpWidth",
          anchorUpWidth + "px"
        ),
        anchorUpX: anchorUpX,
        anchorUpY: anchorUpY,
        anchorDownX: anchorDownX,
        anchorDownY: anchorDownY,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
export default infoDiv;
