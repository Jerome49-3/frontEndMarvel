import { useEffect } from "react"

const Favorites = (fav) => {

  // useEffect(() => {
  //   const handlefav = () => {
  //     try {
  //       if (fav) {
  //         console.log('fav in if:', fav);
  //         const newFav = [...fav];
  //         newFav.map((favoris, key=index)=>{
  //           console.log('favoris:', favoris)
  //         })

  //         // for (let i = 0; i < fav.length; i++) {
  //         //   console.log('fav in for:', fav.length, fav);
  //         //   console.log('i:', i);
  //         //   const el = fav[i];
  //         //   console.log('fav[i]:', el);
  //         //   const favoris = JSON.parse(fav);
  //         //   console.log('favoris:', favoris);
  //         // }
  //         // const favoris = JSON.parse(fav);
  //         // console.log('favoris:', favoris);
  //       }
  //     } catch (error) {
  //       console.log('error:', error);
  //     }
  //   }
  //   handlefav();
  //   console.log('fav in useEffect:', fav);
  // }, [fav])


  return (
    <div>Favorites</div>
  )
}

export default Favorites