import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./database/authcontext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./views/Login"
import Encabezado from "./components/Encabezado";
import Inicio from "./views/Inicio";
import RegisterView from "./views/RegisterView";
import VerPerfilView from "./views/VerPerfilView";
import VerConsultasDoctorView from "./views/VerConsultasDoctorView";
import EnviarConsultaView from "./views/EnviarConsultaView";
import ListaPacientesView from "./views/ListaPacientesView";
import DoctorEstadoView from "./views/DoctorEstadoView";
import ListaDoctoresDisponiblesView from "./views/ListaDoctoresDisponiblesView";
import EducacionView from "./views/EducacionView";
import MisConsultasView from "./views/MisConsultasView";
import ReactGA from "react-ga4";
import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ReactGA.initialize("G-ZPQ0YG91K6");
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'App.jsx'
    });
  }, []);

  return (
    <>
      <AuthProvider>
        <Router>
          <Encabezado />
          <main>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<RegisterView />} />
              <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
              <Route path="/educacion" element={<ProtectedRoute element={<EducacionView />} />} />
              <Route path="/chat" element={<ProtectedRoute element={<EnviarConsultaView />} />} />
              <Route path="/pacientes" element={<ProtectedRoute element={<ListaPacientesView />} />} />
              <Route path="/docestado" element={<ProtectedRoute element={<DoctorEstadoView />} />} />
              <Route path="/consultas" element={<ProtectedRoute element={<MisConsultasView />} />} />
              <Route path="/listdoc" element={<ProtectedRoute element={<ListaDoctoresDisponiblesView />} />} />
              <Route path="/chadoct" element={<ProtectedRoute element={<VerConsultasDoctorView />} />} />
              <Route path="/verperfil" element={<ProtectedRoute element={<VerPerfilView />} />} />
            </Routes>
          </main>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
