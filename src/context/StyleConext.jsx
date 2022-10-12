import { createContext, useContext } from "react";

const StyleContext = createContext();

const useStyleContext = () => {
  const context = useContext(StyleContext);

  if (context === undefined) {
    throw new Error("styleContext hook was used outside of its Provider");
  }

  return context;
};

const StyleContextProvider = ({ children }) => {
  const data = {
    fontSize: '24px',
    color: 'black'
  }

  return (
    <StyleContext.Provider value={data}>
      {children}
    </StyleContext.Provider>
  )
};

export { StyleContext, StyleContextProvider, useStyleContext };