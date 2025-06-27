import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ page, setPage, setSkip }) => {
  return (
    <div>
      <div className="arrLeftTop" onClick={() => {
        console.log('page:', page);
        //au click, j'incrémente de 1
        const newPage = page - 1;
        console.log('newPage:', newPage);
        //j'ajoute la valeur au useState Page
        setPage(newPage);
        // je multiplie la valeur de page par le nombre limit
        const movPage = newPage * limit;
        console.log('movPage:', movPage);
        setSkip(movPage)
      }}><FontAwesomeIcon icon='chevron-left' /></div>
      <div className="arrRightTop" onClick={() => {
        console.log('page:', page);
        //au click, j'incrémente de 1
        const newPage = page + 1;
        console.log('newPage:', newPage);
        //j'ajoute la valeur au useState Page
        setPage(newPage);
        // je multiplie la valeur de page par le nombre limit
        const movPage = newPage * limit;
        console.log('movPage:', movPage);
        setSkip(movPage)
      }}><FontAwesomeIcon icon='chevron-right' />
      </div>
    </div>
  )
}

export default Pagination