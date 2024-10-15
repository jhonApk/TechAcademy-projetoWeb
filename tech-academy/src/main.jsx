import { StrictMode } from "react";
import { createRoot as ReactDOM } from "react-dom/client";
import App from "./App.jsx";
import ScrollTop from "./components/ScrollTop.jsx";


import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/css/main.css"

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollTop/>
       <App />
    </BrowserRouter>
  </StrictMode>
);
