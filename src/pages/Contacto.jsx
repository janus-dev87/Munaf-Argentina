import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
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
      <Navbar />
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
            Contáctanos
          </h1>
          <p className="text-gray-50 text-sm lg:text-base xl:text-xl mb-3">
            Estamos convenientemente ubicados en Zona Norte
          </p>
        </div>
      </section>
      <div className="xl:flex xl:pt-16 pb-6 xl:px-16 xl:justify-center">
        <section className="px-6 py-10 xl:w-1/2 xl:py-8  md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-4xl">
          <h1 className="text-2xl text-center font-bold pb-5 xl:text-3xl xl:pb-10">
            Información de contacto
          </h1>
          <div className="space-y-5 xl:py-3 xl:mt-10">
            <div>
              <p className="xl:text-xl">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#f87171" }}
                  className="mr-3 text-lg"
                />
                <strong>Sucursal Acassuso:</strong> Av. del Libertador 14745
                Acassuso, Buenos Aires, B1641.
              </p>
            </div>
            <div>
              <p className="xl:text-xl">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#f87171" }}
                  className="mr-3 text-lg"
                />
                <strong>Teléfono:</strong> +54 11 47925820
              </p>
            </div>
            <div>
              <p className="xl:text-xl">
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ color: "#f87171" }}
                  className="mr-3 text-lg"
                />
                <strong>Horarios:</strong> Lun. a Vier. de 10 a 18 hrs. - Sáb.
                de 10 a 13 hrs.
              </p>
            </div>
            <div>
              <p className="xl:text-xl">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#f87171" }}
                  className="mr-3 text-lg"
                />
                <strong>Email: </strong>
                <a href="emailto:info@munafoautomoviles.com">
                  info@munafoautomoviles.com
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="px-6 py-8 w-full xl:w-1/2">
          <h1 className="text-2xl text-center font-bold lg:text-3xl pb-5 xl:pb-10">
            Envíanos un mensaje
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
                  rows="5"
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
      </div>
      <section className="py-10 px-6 xl:pb-20 md:max-w-2xl md:mx-auto lg:max-w-3xl xl:max-w-6xl">
        <h1 className="text-2xl text-center font-bold lg:text-3xl pb-5 xl:pb-10">
          Visítanos
        </h1>
        <iframe
          className="w-full min-h-[300px] xl:min-h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.012466564146!2d-58.498931005597115!3d-34.47720800254056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6ad00e6643d%3A0xc7cd3fbb319824cf!2zTXVuYWbDsyBBdXRvbcOzdmlsZXM!5e0!3m2!1ses!2sve!4v1695749845366!5m2!1ses!2sve"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Contacto;
