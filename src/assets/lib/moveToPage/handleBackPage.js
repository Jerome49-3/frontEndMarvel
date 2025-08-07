const handleBackPage = (page, setPage, limit, setSkip) => {
  // console.log("page:", page);
  //au click, j'incrémente de 1
  const newPage = page - 1;
  // console.log("newPage:", newPage);
  //j'ajoute la valeur au useState Page
  setPage(newPage);
  // je multiplie la valeur de page par le nombre limit
  const movPage = newPage * limit;
  // console.log("movPage:", movPage);
  setSkip(movPage);
};
export default handleBackPage;
