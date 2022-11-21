import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import AuthContext from "./contexts/AuthContext";
import Signup from "./sign-up/Signup";
import Signin from "./sign-in/Signin";

export default function App() {
  return (
    <AuthContext.Provider value={""}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/sign-up" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}