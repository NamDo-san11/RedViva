import its1 from '../../assets/its-prevencion.png';
import its2 from '../../assets/its-diagnostico.jpeg';
import its3 from '../../assets/its-tratamiento.jpeg';

const educacionData = [
  {
    id: 1,
    titulo: "¿Qué son las ITS?",
    descripcion: "Descubre qué son las infecciones de transmisión sexual y cómo afectan tu salud.",
    imagen: its1,
    leido: false,
    favorito: false,
    contenido: `Las infecciones de transmisión sexual (ITS) son enfermedades que se transmiten de una persona a otra principalmente a través del contacto sexual sin protección. Algunas de las ITS más comunes son el VIH, la sífilis, la gonorrea, el herpes genital, el virus del papiloma humano (VPH) y la clamidia.

Muchas ITS pueden no presentar síntomas al inicio, lo que puede facilitar su propagación si no se detectan a tiempo. Algunas pueden causar problemas graves como infertilidad, daño a órganos internos o incluso la muerte si no se tratan adecuadamente.

Es importante informarse, hacerse chequeos médicos regulares y mantener prácticas sexuales seguras para prevenir estas infecciones.

Fuente: Organización Mundial de la Salud (OMS)`
  },
  {
    id: 2,
    titulo: "¿Cómo prevenir las ITS?",
    descripcion: "Aprende las mejores estrategias para evitar infecciones de transmisión sexual.",
    imagen: its2,
    leido: false,
    favorito: false,
    contenido: `La prevención de las ITS se basa en prácticas seguras, educación y acceso a servicios médicos adecuados. Algunas recomendaciones importantes son:

- Usar preservativo en todas las relaciones sexuales.
- Limitar el número de parejas sexuales.
- Realizarse pruebas periódicas.
- Evitar compartir objetos que puedan estar contaminados con fluidos corporales.
- Vacunarse contra enfermedades como el VPH y la hepatitis B.

Una vida sexual responsable y el diálogo abierto con las parejas sobre salud sexual son fundamentales para protegerte a ti mismo y a los demás.

Fuente: CDC - Centros para el Control y Prevención de Enfermedades.`
  },
  {
    id: 3,
    titulo: "Diagnóstico y tratamiento de ITS",
    descripcion: "Conoce cómo detectar una ITS y qué pasos seguir si se confirma el diagnóstico.",
    imagen: its3,
    leido: false,
    favorito: false,
    contenido: `La mayoría de las ITS pueden diagnosticarse mediante pruebas sencillas como análisis de sangre, orina o hisopado. Es recomendable realizar pruebas de forma regular si se tienen relaciones sexuales activas.

Si se detecta una ITS, es fundamental iniciar el tratamiento de inmediato. Muchas ITS como la gonorrea o la clamidia se tratan con antibióticos. Otras, como el VIH o el herpes, no se curan, pero existen medicamentos que ayudan a controlarlas y reducir la transmisión.

Nunca te automediques. Acude a un centro médico para recibir orientación profesional.

Fuente: MedlinePlus - Biblioteca Nacional de Medicina de EE. UU.`
  }
];

export default educacionData;
