import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import CursosPage from "./pages/CursosPage";
import TermoPage from "./pages/TermosPage";
import FaqPage from "./pages/FaqPage";
import LoginPage from "./pages/Login-Register/LoginRegistro";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
  return (
    <>

      <NavBar/>

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cursos" Component={CursosPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/termos" Component={TermoPage} />
        <Route path="/login" Component={LoginPage}/>
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
