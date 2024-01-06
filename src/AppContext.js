import React, { useState } from "react";

const Context = React.createContext({});

const Provider = ({ children }) => {

  const [gridSize, setGridSize] = useState(5);
  const [numberOfCards, setNumberOfCards] = useState(12);
  const [userPhrases, setUserPhrases] = useState([]);

  const handleInputChange = (e) => {
    if (e.target.name === 'gridSize') {
      setGridSize(e.target.value);
    } else if (e.target.name === 'numberOfCards') {
      setNumberOfCards(e.target.value);
    } else if (e.target.name === 'userPhrases') {
      setUserPhrases(e.target.value);
    }
  };

  return (
    <Context.Provider 
      value={{
        gridSize,
        numberOfCards,
        userPhrases,
        handleInputChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };