import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import AuthContext from "./contexts/AuthContext";
import Homepage from "./homepage/Homepage";
import Signup from "./sign-up/Signup";
import Signin from "./sign-in/Signin";
import Income from "./homepage/Income";

export default function App() {
  return (
    <AuthContext.Provider value={""}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/sign-up" element={<Signup />}/>
          <Route path="/teste" element={<Income />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}