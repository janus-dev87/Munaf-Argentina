import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import image from "../images/580b585b2edbce24c47b2ca5.png";
import { text } from "@fortawesome/fontawesome-svg-core";
import OpinionCard from "../components/OpinionCard";

function VendeAuto() {
  const textList = [
    {
      description:
        "Completas el formulario con los datos y fotos actuales de la unidad.",
      key: 0,
    },
    {
      description:
        "Evaluamos el estado, la cotización de mercado y nos comunicamos con vos para coordinar una visita de verificación.",
      key: 1,
    },
    {
      description:
        "Listo, nos encargamos de ubicar tu unidad en Tiempo Record!",
      key: 2,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    brand: "",
    model: "",
    year: "",
    color: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setFormIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length === 0 || formData.email.length === 0) {
      setError(true);
    }
  };

  const [selectedBrand, setSelectedBrand] = useState("");
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
    setFormData({
      ...formData,
      brand: brand,
    });
  };
  const brandOptions = [
    "Alfa Romeo",
    "Audi",
    "BMW",
    "Chevrolet",
    "Ford",
    "Honda",
    "Toyota",
    "Volkswagen",
    "Alfa Romeo",
    "Audi",
    "BMW",
    "Chevrolet",
    "Ford",
    "Honda",
    "Toyota",
    "Volkswagen",
  ];

  const reviews = [
    {
      name: "Alejandro Martin",
      description: "Vendió su Renault",
      content:
        "Me encanta este producto, funciona muy bien. Todo excelente. Recomendado",
      rating: 5,
    },
    {
      name: "Alejandro Martín",
      description: "Vendió su Renault",
      content:
        "Es un buen producto, pero algunas características pueden mejorarse.",
      rating: 3,
    },
    {
      name: "Alejandro Martín",
      description: "Vendió su Renault",
      content: "No estoy satisfecho con este producto, no lo recomendaría.",
      rating: 1,
    },
    {
      name: "Alejandro Martín",
      description: "Vendió su Renault",
      content: "No estoy satisfecho con este producto, no lo recomendaría.",
      rating: 1,
    },
  ];

  console.log(formData);

  return (
    <>
      <Navbar />
      <section className="pt-24 md:pt-40">
        {!formIsOpen && (
          <div className="pb-8">
            <section
              className="pb-4 px-12 lg:flex mx-auto
         md:text-lg
         lg:text-xl lg:gap-x-16 lg:px-14
        "
            >
              <div className="lg:w-1/2">
                <h1
                  className="text-gray-900  font-bold text-4xl text-center mb-1
            lg:mb-4 lg:text-left
          lg:text-5xl
          "
                >
                  Consigna tu auto en Munafó
                </h1>
                <div className="mb-4">
                  <p
                    className="text-gray-900 text-base text-center mb-1 font-semibold
          lg:text-2xl lg:text-left
        "
                  >
                    El proceso de alta en nuestro sistema de consignación
                    virtual es muy sencillo.
                  </p>
                </div>
                <ol className="list-decimal list-inside space-y-2 py-2">
                  {textList.map((question) => {
                    return <li key={question.key}>{question.description}</li>;
                  })}
                </ol>
                <div className="flex justify-center my-2 py-4 lg:justify-start">
                  <Button name="Vende tu auto" onclick={handleForm}></Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <img
                  src={image}
                  alt="Vende tu auto"
                  className="shadow-lg shadow-gray-500/60 rounded-2xl 
               sm:w-4/5 
              md:w-3/5 lg:w-full"
                />
              </div>
            </section>
          </div>
        )}
        {formIsOpen && (
          <section className="px-12 pb-8">
            <h1
              className="py-5 text-gray-900 text-base font-bold text-center 
          md:text-lg lg:text-xl xl:text-3xl"
            >
              Completa los datos
            </h1>
            <div className="md:flex md:flex-col md:justify-center md:items-center">
              <form
                class="w-full max-w-lg 
              md:max-w-2xl lg:max-w-3xl xl:max-w-5xl"
                onSubmit={handleSubmit}
              >
                <div class="flex flex-wrap">
                  <div class="w-full md:w-1/2 md:px-2">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                      htmlFor="grid-last-name"
                    >
                      Apellido
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                    mb-3"
                      id="grid-last-name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap ">
                  <div className="w-full md:px-2">
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
                      htmlFor="grid-brand"
                    >
                      Marca
                    </label>
                    <div className="relative">
                      <div
                        className="block bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer
                      mb-3"
                        onClick={toggleDropdown}
                      >
                        <span className="mr-2">
                          {selectedBrand || "Selecciona una marca"}
                        </span>

                        <svg
                          className="fill-current h-4 w-4 inline-block ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                      <div className="">
                        <ul
                          className={`${
                            isDropdownOpen ? "block" : "hidden"
                          } absolute left-0 w-full bg-gray-200 border border-gray-200 rounded mt-2 z-10  max-h-[150px] overflow-auto`}
                        >
                          {brandOptions.map((brand, index) => (
                            <li
                              key={index}
                              onClick={() => handleBrandChange(brand)}
                              className="cursor-pointer py-2 px-4 hover:bg-gray-300"
                            >
                              {brand}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 md:px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-model"
                    >
                      Modelo
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                    mb-3"
                      id="grid-model"
                      type="text"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      placeholder="Ingresa el modelo"
                    />
                  </div>

                  <div className="w-full md:w-1/2 md:px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-year"
                    >
                      Año
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500
                    mb-3"
                      id="grid-year"
                      type="text"
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="Ingresa el año"
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:px-2">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-color"
                    >
                      Color
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-color"
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      placeholder="Ingresa el color"
                    />
                  </div>
                </div>
                <div className="px-2 mt-3 xl:mt-5">
                  <Button name="Enviar" />
                </div>
              </form>
            </div>
          </section>
        )}
        <section className="px-12 pb-8 lg:pb-12 xl:pb-16 lg:px-14">
          <div
            className="py-16 lg:flex lg:justify-center lg:items-center lg:flex-col
           "
          >
            <h1
              className="text-2xl font-bold text-center 
              
              xl:text-3xl"
            >
              Testimonios de personas que vendieron su auto
            </h1>
            <div
              className="py-3 gap-y-4 flex flex-col items-center justify-center
             md:flex-row md:flex-wrap md:flex-1  md:gap-x-8
             xl:w-full xl:justify-evenly
             "
            >
              {reviews.map((review, index) => (
                <OpinionCard key={index} opinion={review} />
              ))}
            </div>
          </div>
        </section>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default VendeAuto;
