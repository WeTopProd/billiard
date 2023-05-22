import React from 'react'
import { createContext, useState } from 'react';


export const MyContext = createContext();

const Context = (props) => {

  const [favorites, setFavorites] = useState(false);

  console.log(favorites);


  function toggleFavorites() {
    setFavorites(!favorites);
    // if(favorites) {
    //   setArrFavorites()
    // }
  }

  return (
    <MyContext.Provider value={toggleFavorites}>{props.children}</MyContext.Provider>
  )
}

export default Context