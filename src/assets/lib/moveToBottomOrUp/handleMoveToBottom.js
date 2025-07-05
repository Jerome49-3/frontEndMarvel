const handleMoveToBottom = (e, dimDiv) => {
  try {
    e.preventDefault();
    console.log("%cdimDiv in handleMoveToBottom:", "color: magenta", dimDiv);
    const anchorX = dimDiv.anchorDownX;
    console.log("%canchorX:", "color: magenta", anchorX);
    const anchorY = dimDiv.anchorDownY;
    console.log("%canchorY:", "color: magenta", anchorY);
    scrollTo(anchorX, anchorY);
  } catch (error) {
    console.log("error in handleMoveToBottom:", "color: red", error);
  }
};
export default handleMoveToBottom;
