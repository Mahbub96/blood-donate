import "./App.css";
import LoginPage from "./components/pages/LoginPages/MainLoginPage";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import LoginContextProvider from "./components/pages/LoginPages/LoginContext";

function App() {
  return (
    <Router>
      <LoginContextProvider>
        <LoginPage />
      </LoginContextProvider>
      <Routes></Routes>
    </Router>
  );
}

export default App;
