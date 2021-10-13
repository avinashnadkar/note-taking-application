import React, { useState } from "react";

const StoreContext = React.createContext();
console.log(StoreContext); //provider ,consumer

const StoreContextProvider = ({ children }) => {
  let cardList = localStorage.getItem('cards')
  const [cards, setCards] = useState(cardList);
  // console.log(children);
  const toggleTheme = () => {
    setIsDarkMode(isDarkMode == "light" ? "dark" : "light");
  };
  const value = { isDarkMode, toggleTheme, theme: themeData[isDarkMode] }; 
  return (
    <StoreContext.Provider value={value}> {children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };