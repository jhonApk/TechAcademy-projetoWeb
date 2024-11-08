import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import CursosPage from "./pages/CursosPage";
import TermoPage from "./pages/TermosPage";
import FaqPage from "./pages/FaqPage";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import RegistroPage from "./pages/RegisterPage"
import Dashboard from "./pages/DashboardPage";

import "./Style/css/loginRegistro.css"


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
        <Route path="/registro" Component={RegistroPage}/>
        <Route path="/dashboard" Component={Dashboard}/>

      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
