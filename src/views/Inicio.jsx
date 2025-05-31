import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../database/firebaseconfig";
import { useAuth } from "../database/authcontext";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Inicio.css";
import ModalInstalacionIOS from "../components/inicio/ModalInstalacionIOS";
import ChatBotIntegrado from "../components/inicio/ChatBotIntegrado";
import Idefault from "../assets/default.jpeg";

const Inicio = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [perfil, setPerfil] = useState(null);
    const [solicitudInstalacion, setSolicitudInstalacion] = useState(null);
    const [mostrarBotonInstalacion, setMostrarBotonInstalacion] = useState(false);
    const [esDispositivoIOS, setEsDispositivoIOS] = useState(false);
    const [mostrarModalInstrucciones, setMostrarModalInstrucciones] = useState(false);

    const abrirModalInstrucciones = () => setMostrarModalInstrucciones(true);
    const cerrarModalInstrucciones = () => setMostrarModalInstrucciones(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const esIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        setEsDispositivoIOS(esIOS);
    }, []);

    useEffect(() => {
        const manejarSolicitudInstalacion = (evento) => {
            evento.preventDefault();
            setSolicitudInstalacion(evento);
            setMostrarBotonInstalacion(true);
        };

        window.addEventListener("beforeinstallprompt", manejarSolicitudInstalacion);

        return () => {
            window.removeEventListener("beforeinstallprompt", manejarSolicitudInstalacion);
        };
    }, []);

    const instalacion = async () => {
        if (!solicitudInstalacion) return;

        try {
            await solicitudInstalacion.prompt();
            const { outcome } = await solicitudInstalacion.userChoice;
            console.log(outcome === "accepted" ? "Instalación aceptada" : "Instalación rechazada");
        } catch (error) {
            console.error("Error al intentar instalar la PWA:", error);
        } finally {
            setSolicitudInstalacion(null);
            setMostrarBotonInstalacion(false);
        }
    };

    useEffect(() => {
        const obtenerPerfil = async () => {
            if (user) {
                const ref = doc(db, "usuarios", user.uid);
                const docSnap = await getDoc(ref);
                if (docSnap.exists()) {
                    setPerfil(docSnap.data());
                }
            }
        };
        obtenerPerfil();
    }, [user]);

    return (
        <div className="inicio-wrapper">
            <header className="inicio-header" data-aos="fade-down">
                <Container>
                    <br />
                    <h1>RedViva</h1>
                    <p>Información sobre enfermedades de transmisión sexual</p>
                </Container>
                {!esDispositivoIOS && mostrarBotonInstalacion && (
                    <div className="my-4">
                        <Button className="sombra" variant="danger" onClick={instalacion}>
                            Instalar app <i className="bi bi-download"></i>
                        </Button>
                    </div>
                )}
                {esDispositivoIOS && (
                    <div className="text-center my-4">
                        <Button className="sombra" variant="danger" onClick={abrirModalInstrucciones}>
                            Cómo instalar en iPhone <i className="bi bi-phone"></i>
                        </Button>
                    </div>
                )}
                <ModalInstalacionIOS mostrar={mostrarModalInstrucciones} cerrar={cerrarModalInstrucciones} />
            </header>

            {perfil && (
                <Container className="my-5">
                    <Card className="shadow rounded text-center p-4">
                        <Row className="align-items-center">
                            <Col md={2}>
                                <img
                                    src={perfil.foto || Idefault}
                                    alt="Foto perfil"
                                    className="rounded-circle"
                                    width="80"
                                    height="80"
                                />
                            </Col>
                            <Col md={10} className="text-start">
                                <h5>{perfil.nombre}</h5>
                                <p className="mb-1 text-muted">Correo: {perfil.correo || "N/A"}</p>
                                <p className="mb-1">Pesa {perfil.peso || "??"} kg</p>
                                <p className="mb-1">Enfermedades: {perfil.enfermedades || "sin enfermedades"}</p>
                                <div className="mt-3">
                                    <Button variant="outline-warning" onClick={() => navigate("/verperfil")}>Más información</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            )}

            <section className="inicio-section bg-light" data-aos="fade-up">
                <Container>
                    <h2 className="text-center">¿Qué son las ETS?</h2>
                    <p className="text-center">
                        Las enfermedades de transmisión sexual (ETS) son infecciones que se transmiten de una persona a otra a través del contacto sexual. Pueden ser causadas por bacterias, virus o parásitos. Algunas de las ETS más comunes son el VIH, clamidia, gonorrea, sífilis, herpes genital y el virus del papiloma humano (VPH).
                    </p>
                </Container>
            </section>

            <section className="inicio-section dark-section" data-aos="fade-left">
                <Container>
                    <h3>¿Cómo prevenir las ETS?</h3>
                    <ul>
                        <li>Uso correcto del preservativo</li>
                        <li>Evitar el contacto con sangre o fluidos</li>
                        <li>Realizarse chequeos médicos regularmente</li>
                        <li>Mantener relaciones sexuales con una sola pareja no infectada</li>
                        <li>Vacunarse contra enfermedades como el VPH y la hepatitis B</li>
                    </ul>
                    <ChatBotIntegrado />
                </Container>
            </section>

            <footer className="inicio-footer">
                <Container className="text-center">
                    <p>&copy; {new Date().getFullYear()} RedViva | Información para tu salud sexual</p>
                </Container>
            </footer>
        </div>
    );
};

export default Inicio;
