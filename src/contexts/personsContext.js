import React, { useState } from "react";

export const PersonsContext = React.createContext(null);

const PersonsContextProvider = (props) => {
  
  const [favouritePersons, setFavouritePersons] = useState([]);
  

  const addToFavouritePersons = (person) => {
    if (!favouritePersons.includes(person.id)) {
      let newFavouritePersons = [...favouritePersons, person.id];
      setFavouritePersons(newFavouritePersons);
    }
  };

  

  // We will use this function in a later section
  const removeFromFavouritePersons = (person) => {
    setFavouritePersons(favouritePersons.filter((pId) => pId !== person.id));
  };



  return (
    <PersonsContext.Provider
      value={{
        favouritePersons,
        
        addToFavouritePersons,

        removeFromFavouritePersons,

      }}
    >
      {props.children}
    </PersonsContext.Provider>
  );
};

export default PersonsContextProvider;