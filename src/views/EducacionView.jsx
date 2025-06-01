import React, { useState } from "react";
import { Card, Button, Modal, Badge, Container } from "react-bootstrap";
import its1 from '../assets/its-prevencion.png';
import its2 from '../assets/its-diagnostico.jpeg';
import its3 from '../assets/its-tratamiento.jpeg';

const datosIniciales = [
  {
    id: 1,
    titulo: "¿Qué son las ITS?",
    descripcion: "Las ITS son infecciones que se transmiten por contacto sexual. Conoce qué son y cómo se previenen.",
    contenido: `Las ITS (Infecciones de Transmisión Sexual) son enfermedades que se contagian mediante relaciones sexuales sin protección. Algunas comunes incluyen VIH, clamidia, gonorrea, sífilis y herpes genital. Muchas pueden prevenirse con el uso de preservativo y detectarse con pruebas rutinarias.`,
    imagen: its1,
    leido: false,
    favorito: false,
  },
  {
    id: 2,
    titulo: "Prevención de ITS",
    descripcion: "Conoce las prácticas que reducen el riesgo de contagio: condón, vacunación y pruebas periódicas.",
    contenido: `Para prevenir ITS, usa condón correctamente en todas tus relaciones sexuales. Hazte pruebas médicas regulares, especialmente si tienes nuevas parejas. Existen vacunas como la del VPH y la hepatitis B que reducen el riesgo. Evita compartir objetos personales como jeringas o juguetes sexuales sin esterilizar.`,
    imagen: its2,
    leido: false,
    favorito: false,
  },
  {
    id: 3,
    titulo: "Síntomas y diagnóstico",
    descripcion: "Infórmate sobre señales comunes y cómo se detectan estas infecciones de forma temprana.",
    contenido: `Algunas ITS presentan síntomas como secreción, ardor al orinar, úlceras genitales o dolor pélvico. Sin embargo, muchas pueden ser silenciosas. Por eso, es importante realizar chequeos aunque no tengas molestias. Acude al médico ante cualquier sospecha o cambio en tu salud sexual.`,
    imagen: its3,
    leido: false,
    favorito: false,
  },
];

const EducacionITS = () => {
  const [articulos, setArticulos] = useState(datosIniciales);
  const [modal, setModal] = useState(null);

  const toggleLeido = (id) => {
    setArticulos((prev) =>
      prev.map((art) => (art.id === id ? { ...art, leido: !art.leido } : art))
    );
  };

  const toggleFavorito = (id) => {
    setArticulos((prev) =>
      prev.map((art) => (art.id === id ? { ...art, favorito: !art.favorito } : art))
    );
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 text-black fw-bold">
        Información sobre Infecciones de Transmisión Sexual (ITS)
      </h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {articulos.map((articulo) => (
          <Card key={articulo.id} style={{ width: "20rem" }} className="shadow">
            <Card.Img
              variant="top"
              src={articulo.imagen}
              alt={articulo.titulo}
              style={{ height: "160px", objectFit: "cover" }}
              onClick={() => setModal(articulo)}
            />
            <Card.Body>
              <Card.Title>{articulo.titulo}</Card.Title>
              <Card.Text>{articulo.descripcion}</Card.Text>
              <div className="d-flex justify-content-between">
                <Button
                  variant={articulo.leido ? "success" : "outline-success"}
                  size="sm"
                  onClick={() => toggleLeido(articulo.id)}
                >
                  {articulo.leido ? "Leído" : "Marcar Leído"}
                </Button>
                <Button
                  variant={articulo.favorito ? "warning" : "outline-warning"}
                  size="sm"
                  onClick={() => toggleFavorito(articulo.id)}
                >
                  {articulo.favorito ? "Quitar Favorito" : "Favorito"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}

        <div className="container mt-5">
          <h2 className="text-center mb-5 text-black fw-bold">Videos Educativos sobre ITS</h2>
          <div className="d-flex flex-column align-items-center">
            <div key="0" className="w-100" style={{ maxWidth: "720px", marginBottom: "40px" }}>
              <h4 className="text-center mb-3">¿Qué son las ITS?</h4>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/LLCBe_uLbdc"
                  title="¿Qué son las ITS?"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div key="1" className="w-100" style={{ maxWidth: "720px", marginBottom: "40px" }}>
              <h4 className="text-center mb-3">¿Cómo se previenen las ITS?</h4>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/yW4JDNO555U"
                  title="¿Cómo se previenen las ITS?"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div key="2" className="w-100" style={{ maxWidth: "720px", marginBottom: "40px" }}>
              <h4 className="text-center mb-3">¿Cuáles son los síntomas más comunes?</h4>
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/f-csS01htqw"
                  title="¿Cuáles son los síntomas más comunes?"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

      </div>

      {modal && (
        <Modal show onHide={() => setModal(null)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{modal.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={modal.imagen}
              alt={modal.titulo}
              className="mb-3 img-fluid rounded"
            />
            <p style={{ whiteSpace: "pre-line" }}>{modal.contenido}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModal(null)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default EducacionITS;
