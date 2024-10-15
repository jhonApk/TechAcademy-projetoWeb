import { Routes, Route } from "react-router-dom";
import HomePage  from "./pages/HomePage";
import CursosPage from "./pages/CursosPage";
import TermoPage from "./pages/TermosPage";
import FaqPage from "./pages/FaqPage";

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/LoginPage"



function App() {
  return (
    <>

      <NavBar/>

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/cursos" Component={CursosPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/termos" Component={TermoPage} />
			  <Route path="/login" exact element={LoginPage} />
        <Route path='/register' element={RegisterPage}/>

      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
