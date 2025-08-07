const handleMoveToTop = (e, dimDiv) => {
  e.preventDefault();
  // console.log("%cdimDiv in handleMoveToTop:", "color: magenta", dimDiv);
  try {
    scrollTo(dimDiv.anchorUpX, dimDiv.anchorUpY);
  } catch (error) {
    console.log("error in handleMoveToTop:", "color: red", error);
  }
};
export default handleMoveToTop;
