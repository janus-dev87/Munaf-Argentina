import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Vehiculos from "./pages/Vehiculos";
import Promo from "./pages/Promo";
import VendeAuto from "./pages/VendeAuto";
import Servicio from "./pages/Servicio";
import Empresa from "./pages/Empresa";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/vehiculos" element={<Vehiculos />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/vende-tu-auto" element={<VendeAuto />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
