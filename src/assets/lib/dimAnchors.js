const dimAnchors = (anchorUp, anchorDown) => {
  try {
    if (anchorUp.current && anchorDown.current) {
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
      return { anchorUpX, anchorUpY, anchorDownX, anchorDownY };
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
export default dimAnchors;
