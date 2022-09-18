import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = (props) => {
  const [toggle, setToggle] = useState(true);

  const value = { toggle, setToggle };

  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
