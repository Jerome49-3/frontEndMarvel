const addConstInfoDiv = (anchorUp, setDimDiv) => {
  try {
    if (anchorUp.current !== undefined) {
      const getDimAnchorUp = anchorUp.current.getBoundingClientRect();
      // console.log("%cgetDimAnchorUp:", "color: magenta", getDimAnchorUp);
      const anchorUpHeight = getDimAnchorUp.height;
      // console.log("%canchorUpHeight:", "color: magenta", anchorUpHeight);
      const anchorUpWidth = getDimAnchorUp.width;
      // console.log("%canchorUpWidth:", "color: magenta", anchorUpWidth);
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
      });
    }
  } catch (error) {
    console.error(error);
  }
};
export default addConstInfoDiv;
