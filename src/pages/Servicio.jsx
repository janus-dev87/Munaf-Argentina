import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCar,
  faCircleCheck,
  faPersonChalkboard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import image from "../images/static_map_2023-1024x500.jpg";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

function Servicio() {
  const list = [
    {
      id: 1,
      content: "Mantenimiento preventivo y correctivo de motores",
    },
    {
      id: 2,
      content: "Revisión de frenos y sustitución de pastillas y discos.",
    },
    {
      id: 3,
      content:
        "Sustitución de neumáticos y revisión del sistema de suspensión.",
    },
    {
      id: 4,
      content: "Cambio de aceite y filtros.",
    },
    {
      id: 5,
      content: "Sustitución de correas de distribución.",
    },
    {
      id: 6,
      content: "Revisión y reparación del sistema de refrigeración.",
    },
    {
      id: 7,
      content: "Reparación y sustitución de la transmisión y el embrague.",
    },
    {
      id: 8,
      content:
        "Diagnóstico y reparación de problemas eléctricos y electrónicos.",
    },
    {
      id: 9,
      content: "Servicio de frenos ABS y control de tracción.",
    },
    {
      id: 10,
      content: "Alineación y balanceo de neumáticos.",
    },
    {
      id: 11,
      content: "Inspección y reparación de la dirección y la suspensión.",
    },
    {
      id: 12,
      content: "Diagnóstico y reparación de problemas de aire acondicionado.",
    },
    {
      id: 13,
      content: "Limpieza y ajuste de inyectores de combustible.",
    },
    {
      id: 14,
      content: "Reparación y sustitución del sistema de escape.",
    },
    {
      id: 15,
      content: "Reparación y sustitución del sistema de escape.",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length === 0 || formData.email.length === 0) {
      setError(true);
    }
  };
  const [error, setError] = useState(false);

  return (
    <>
      <Navbar className="mb-10" />
      <section
        className="flex flex-col items-center justify-center px-6 h-[600px] bg-hero-image bg-cover bg-gray-800/80 bg-blend-multiply 
      md:pr-48 md:pl-16 xl:items-start"
      >
        <div className="xl:max-w-[60%]">
          <h1
            className="text-gray-50 text-2xl font-bold mt-48 mb-3
        lg:text-3xl
        xl:text-5xl"
          >
            Tráenos tu auto para un chequeo gratis o un servicio completo
          </h1>
          <p className="text-gray-50 text-sm lg:text-base xl:text-xl mb-3">
            Nuestro equipo de mecánicos está altamente capacitado y comprometido
            en brindar un servicio de excelencia, utilizando los mejores equipos
            y tecnologías disponibles en el mercado.
          </p>
          <Button name="Reservar turno" />
        </div>
      </section>
      <section className="px-6 py-8">
        <h1 className="text-4xl px-2 font-bold tracking-tight text-center hidden lg:block lg:py-10">
          Ventajas
        </h1>
        <div className="lg:flex lg:items-start lg:justify-center lg:max-w-6xl lg:mx-auto lg:space-x-5">
          <div
            className="px-5 mx-auto h-auto py-4
      border-b-[2px] border-solid border-b-slate-400/20
    lg:w-1/4 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0"
          >
            <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
              <FontAwesomeIcon
                icon={faBrain}
                style={{ color: "#f87171" }}
                className="hidden lg:block lg:h-14 lg:py-2"
              />
            </div>
            <h2
              className="text-lg py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
         sm:px-24
         lg:px-0 lg:min-h-[98px] lg:flex lg:items-center
         "
            >
              Experiencia y conocimiento técnico
            </h2>
            <p
              className="px-3 text-center text-sm text-gray-900/90
        sm:px-36 sm:py-2
        lg:px-0 lg:text-center
        "
            >
              El taller cuenta con mecánicos altamente capacitados y con
              experiencia en reparar y mantener automóviles.
            </p>
          </div>
          <div
            className="px-5 mx-auto h-auto py-4
      border-b-[2px] border-solid border-b-slate-400/20
    lg:w-1/4 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0"
          >
            <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
              <FontAwesomeIcon
                icon={faCar}
                style={{ color: "#f87171" }}
                className="hidden lg:block lg:h-14 lg:py-2"
              />
            </div>
            <h2
              className="text-lg py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
         sm:px-24
         lg:px-0 lg:min-h-[98px] lg:flex lg:items-center
         "
            >
              Variedad de servicios
            </h2>
            <p
              className="px-3 text-center text-sm text-gray-900/90
        sm:px-36 sm:py-2
        lg:px-0 lg:text-center
        "
            >
              El taller ofrece una amplia gama de servicios, como mantenimiento
              preventivo, reparaciones mecánicas, alineación y balanceo de
              llantas, entre otros.
            </p>
          </div>
          <div
            className="px-5 mx-auto h-auto py-4
      border-b-[2px] border-solid border-b-slate-400/20
    lg:w-1/4 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0"
          >
            <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                style={{ color: "#f87171" }}
                className="hidden lg:block lg:h-14 lg:py-2"
              />
            </div>
            <h2
              className="text-lg py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
         sm:px-24
         lg:px-0 lg:min-h-[98px] lg:flex lg:items-center
         "
            >
              Tecnología y herramientas de vanguardia
            </h2>
            <p
              className="px-3 text-center text-sm text-gray-900/90
        sm:px-36 sm:py-2
        lg:px-0 lg:text-center
        "
            >
              El taller cuenta con herramientas y tecnología de última
              generación.
            </p>
          </div>
          <div
            className="px-5 mx-auto h-auto py-4
      border-b-[2px] border-solid border-b-slate-400/20
    lg:w-1/4 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0"
          >
            <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
              <FontAwesomeIcon
                icon={faPersonChalkboard}
                style={{ color: "#f87171" }}
                className="hidden lg:block lg:h-14 lg:py-2"
              />
            </div>
            <h2
              className="text-lg py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
         sm:px-24
          lg:min-h-[98px] lg:flex lg:items-center lg:px-0
         "
            >
              Atención personalizada
            </h2>
            <p
              className="px-3 text-center text-sm text-gray-900/90
        sm:px-36 sm:py-2
        lg:px-0 lg:text-center
        "
            >
              El taller ofrece una atención personalizada y un trato amable y
              profesional a sus clientes.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-8 xl:px-16">
        <h1 className="text-2xl text-center pb-5 font-bold lg:text-3xl xl:pb-10">
          Nuestros Servicios
        </h1>
        <div className="py-3 xl:px-12 lg:max-w-6xl mx-auto">
          <ul className="space-y-px">
            {list.map(({ id, content }) => (
              <li
                key={id}
                className={`${
                  id % 2 === 0 ? "bg-white" : "bg-red-200"
                } p-3 rounded-lg md:flex md:items-center md:justify-between md:px-6 lg:text-lg`}
              >
                <h2>{content}</h2>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#f87171" }}
                  className="hidden xl:text-2xl lg:block"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="xl:flex xl:px-6 xl:justify-center xl:items-center">
        <section className="px-6 py-8 w-full">
          <h1 className="text-2xl text-center font-bold lg:text-3xl pb-5 xl:pb-10">
            Contáctanos para tu servicio mecánico
          </h1>
          <form
            className="w-full max-w-lg py-3
              md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-4xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 md:px-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-name"
                >
                  Nombre (Requerido)
                </label>
                <input
                  className={`${
                    error ? "border-red-400" : "border-gray-200"
                  } appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                  id="grid-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                />
                {error && (
                  <p className="text-red-500 text-xs italic">
                    Este campo es requerido.
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 md:px-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-email"
                >
                  Email (Requerido)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="ejemplo@email.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="w-full md:w-1/2 md:px-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-phone"
                >
                  Teléfono
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                    mb-3"
                  id="grid-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ingresa tu teléfono"
                />
              </div>
              <div className="w-full md:w-1/2 md:px-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-subject"
                >
                  Asunto
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                    mb-3"
                  id="grid-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Ingresa el asunto"
                />
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="w-full md:px-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-message"
                >
                  Cuéntanos sobre tu auto
                </label>
                <textarea
                  className="appearance-none resize-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                mb-3 
                "
                  placeholder="Tu mensaje"
                  name="message"
                  id="grid-message"
                  cols="30"
                  rows="10"
                  onChange={handleInputChange}
                  value={formData.message}
                ></textarea>
              </div>
            </div>
            <div className="px-2 mt-3 xl:mt-5 text-center">
              <Button name="Enviar" />
            </div>
          </form>
        </section>
        {/* <section className="px-6 pb-8 xl:w-1/2 xl:py-8">
          <h1 className="text-2xl text-center font-bold pb-3 xl:text-3xl xl:hidden">
            Visítanos
          </h1>
          <img
            src={image}
            className="md:px-2 md:max-w-2xl md:mx-auto xl:w-full"
          />
        </section> */}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Servicio;
