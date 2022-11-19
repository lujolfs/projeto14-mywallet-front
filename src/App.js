import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import AuthContext from "./contexts/AuthContext";
import Signup from "./sign-up/Signup";

export default function App() {
  return (
    <AuthContext.Provider value={""}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/sign-up" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}