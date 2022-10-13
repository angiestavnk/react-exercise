import { createContext, useContext, useState } from "react";

const StyleContext = createContext();

const useStyleContext = () => {
  const context = useContext(StyleContext);

  if (context === undefined) {
    throw new Error("styleContext hook was used outside of its Provider");
  }

  return context;
};

const StyleContextProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('22px');
  const [color, setColor] = useState('black');
  
  const data = {
    fontSize: fontSize,
    setFontSize: setFontSize,
    color: color,
    setColor: setColor
  }

  return (
    <StyleContext.Provider value={data}>
      {children}
    </StyleContext.Provider>
  )
};

export { StyleContext, StyleContextProvider, useStyleContext };