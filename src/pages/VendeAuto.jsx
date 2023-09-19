import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { text } from "@fortawesome/fontawesome-svg-core";

function VendeAuto() {
  const textList = [
    {
      description:
        "El proceso de alta en nuestro sistema de consignación virtual es muy sencillo.",
      key: 0,
    },
    {
      description:
        "Nos enviás estos datos primarios con fotos actuales de tu unidad.",
      key: 1,
    },
    {
      description:
        "Evaluamos el estado, la cotización de mercado y nos comunicamos con vos para coordinar una visita de verificación.",
      key: 2,
    },
    {
      description:
        "Listo, nos encargamos de ubicar tu unidad en Tiempo Record!",
      key: 3,
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

  console.log(formData);

  return (
    <>
      <Navbar />
      <section className="pt-24 md:pt-40">
        <section
          className="pb-4 px-12 
        md:px-24 md:text-lg
        lg:px-36 lg:text-xl
        xl:px-56"
        >
          <h1
            className="text-gray-900  font-bold text-4xl text-center mb-1
            lg:mb-4
          lg:text-5xl
          xl:text-6xl"
          >
            Vendé tu auto
          </h1>
          <div className="mb-4">
            <p
              className="text-gray-900 text-sm text-center mb-1
          lg:text-2xl
          xl:text-3xl"
            >
              Aprovechá hoy y vendé tu auto con las mejores condiciones del
              mercado.
            </p>
            <p
              className="text-gray-900 text-sm text-center mb-6
          lg:text-2xl
          xl:text-3xl"
            >
              Te brindamos ser parte de nuestra Red Privada Munafó, envianos la
              información de tu auto
            </p>
          </div>
          <ol className="list-decimal space-y-4 lg:px-10">
            {textList.map((question) => {
              return <li key={question.key}>{question.description}</li>;
            })}
          </ol>
        </section>

        <section className="px-12 pb-8 lg:pb-12 xl:pb-16">
          <h1
            className="py-5 text-gray-900 text-base font-bold text-center 
          md:text-lg lg:text-xl xl:text-3xl"
          >
            Completa los datos
          </h1>
          <div className="md:flex md:flex-col md:justify-center md:items-center">
            <form
              class="w-full max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-5xl"
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
        <Newsletter />
        <Footer />
      </section>
    </>
  );
}

export default VendeAuto;
