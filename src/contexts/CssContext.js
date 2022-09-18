import { createContext, useContext, useState } from "react";

const CSSContext = createContext();
export const useCSSContext = () => useContext(CSSContext);

const CSSContextProvider = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#5138ED");

  const value = { primaryColor, setPrimaryColor };

  return (
    <CSSContext.Provider value={value}>{props.children}</CSSContext.Provider>
  );
};

export default CSSContextProvider;
