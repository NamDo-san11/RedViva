import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useAuth } from "../database/authcontext";
import { doc, getDoc } from "firebase/firestore";
import { db} from "../database/firebaseconfig";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css";

const Encabezado = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [rolUsuario, setRolUsuario] = useState(null);
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const obtenerRol = async () => {
      if (user) {
        const ref = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          setRolUsuario(docSnap.data().rol?.toLowerCase());
        }
      }
    };
    obtenerRol();
  }, [user]);

  const handleLogout = async () => {
    setIsCollapsed(false);
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("adminPassword");
    await logout();
    navigate("/");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setIsCollapsed(false);
  };

  const ocultar = location.pathname === "/" || location.pathname === "/registro";
  if (ocultar) return null;

  return (
    <Navbar expand="sm" fixed="top" className="color-navbar">
      <Container>
        <Navbar.Brand
          onClick={() => handleNavigate("/inicio")}
          className="text-white"
          style={{ cursor: "pointer" }}
        >
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <strong>RedViva</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          placement="end"
          show={isCollapsed}
          onHide={() => setIsCollapsed(false)}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className={isCollapsed ? "color-texto-marca" : "text-white"}
            >
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link
                onClick={() => handleNavigate("/inicio")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed && <i className="bi-house-door-fill me-2"></i>}
                <strong>Inicio</strong>
              </Nav.Link>

              <Nav.Link
                onClick={() => handleNavigate("/educacion")}
                className={isCollapsed ? "color-texto-marca" : "text-white"}
              >
                {isCollapsed && <i className="bi bi-window-sidebar me-2"></i>}
                <strong>Educación</strong>
              </Nav.Link>

              {rolUsuario === "usuario" && (
                <>

                  <Nav.Link
                    onClick={() => handleNavigate("/consultas")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-calendar-fill me-2"></i>}
                    <strong>Mis Consultas</strong>
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => handleNavigate("/listdoc")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-file-person-fill me-2"></i>}
                    <strong>Doctores</strong>
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => handleNavigate("/chat")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-chat-left-text me-2"></i>}
                    <strong>Chat</strong>
                  </Nav.Link>
                </>
              )}

              {rolUsuario === "doctor" && (
                <>
                  <Nav.Link
                    onClick={() => handleNavigate("/chadoct")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-chat-left-text me-2"></i>}
                    <strong>Consultas</strong>
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => handleNavigate("/docestado")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-file-earmark-person-fill me-2"></i>}
                    <strong>Estado</strong>
                  </Nav.Link>

                  <Nav.Link
                    onClick={() => handleNavigate("/pacientes")}
                    className={isCollapsed ? "color-texto-marca" : "text-white"}
                  >
                    {isCollapsed && <i className="bi bi-people me-2"></i>}
                    <strong>Pacientes</strong>
                  </Nav.Link>
                </>
              )}

              {isLoggedIn && (
                <Nav.Link
                  onClick={handleLogout}
                  className={isCollapsed ? "text-black" : "text-white"}
                >
                  <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Encabezado;
