import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import CSSContextProvider from "./contexts/CssContext";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#5138ED",
    secondary: "#4F37EA",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <CSSContextProvider>
      <App />
    </CSSContextProvider>
  </ChakraProvider>
);
