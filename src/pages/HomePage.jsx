import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Dropdowns from "../components/Dropdowns";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleCheck,
  faBusinessTime,
  faCar,
  faWrench,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import CardCarousel from "../components/CardCarousel";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import data from "../data";

const marcas = {
  title: "Marca",
  options: ["Ferrari", "Porsche", "Mercedes", "Ferrari"],
};

const year = {
  title: "Año",
  options: [],
};

for (let i = 1943; i < 2024; i++) {
  year.options.push(i);
}

const model = {
  title: "Modelo",
  options: [],
};

const kilometers = {
  title: "Kilómetros",
  options: ["<79", "<5000"],
};

const price = {
  title: "Precio",
  options: ["<10,000", "<20,000"],
};

function HomePage() {
  return (
    <>
      <section className="h-[60vh] relative w-full bg-hero-image bg-cover bg-blend-multiply bg-gray-600">
        <Navbar className="fixed top-0 right-0" />
      </section>

      <Banner />
      <div className="xl:pl-5 xl:mx-auto xl:bg-gray-100">
        <div className="xl:bg-gray-100 xl:flex">
          <div className="md:bg-gray-100 xl:w-1/2">
            <section
              className="h-auto py-12 mx-auto bg-gray-100 px-5 
            sm:w-11/12 
            lg:w-full  
            xl:border-r-[1px] xl:border-solid xl:border-r-gray-300
            xl:border-b-[1px]  xl:border-b-gray-500
            border-b-[1px] border-solid border-b-slate-300"
            >
              <div className=" mx-auto">
                <h1 className=" flex items-center text-4xl py-5 px-2 font-bold tracking-tight text-red-500 text-center">
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-red-400 rounded h-0.5"
                  ></span>
                  <span className="mx-3 ">Bienvenidos</span>
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-red-400 rounded h-0.5"
                  ></span>
                </h1>
                <p
                  className="text-lg text-gray-900 py-2 px-2
                md:px-12"
                >
                  Gracias por visitar nuestro sitio. En Munafó Automóviles
                  ofrecemos vehículos seleccionados en perfectas condiciones,
                  trabajando dia a dia para lograr brindar una mejor atención al
                  cliente. Podemos facilitarle la gestion de la venta de su
                  usado mediante nuestra Red Privada Munafó (RPM), tomarlo en
                  consignación o simplemente comprarlo a un precio razonable.
                  Además, proveemos servicios financieros para que cuente con
                  facilidades muy convenientes según sus ingresos. Comience con
                  la experiencia de cambiar su automóvil ahora.
                </p>
              </div>
            </section>
          </div>
          <section
            className="h-auto min-h-[400px] mx-auto bg-white px-3 py-12
          md:w-11/12
           lg:w-3/4 
           xl:w-1/2
           
           xl:border-r-[1px] xl:border-solid xl:border-r-gray-300
            xl:border-b-[1px]  xl:border-b-gray-500
           border-b-[1px] border-solid border-b-slate-300"
          >
            <div className="mx-auto">
              <h1
                className=" flex items-center text-2xl py-5 px-2 
              font-bold tracking-tight text-red-500 text-center
              xl:pr-5"
              >
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5"
                ></span>
                <span className="mx-3 xl:pr-5">Encontrá tu próximo auto</span>
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5"
                ></span>
              </h1>
              <section>
                <div
                  className="w-full mx-auto flex justify-center flex-wrap
                  
                 sm:flex-col sm:my-8
                 xl:pr-5"
                >
                  <div
                    className="flex justify-center space-x-4 mb-5
                  sm:mb-6 xl:pr-5"
                  >
                    <Dropdowns options={marcas} />
                    <Dropdowns options={year} />
                  </div>
                  <div
                    className="flex justify-center space-x-4
                  sm:mb-6 xl:pr-5"
                  >
                    <Dropdowns options={model} />
                    <Dropdowns options={kilometers} />
                    <Dropdowns options={price} />
                  </div>
                  <div
                    className="flex mt-6 space-x-5
                  sm:justify-center sm:items-center sm:mt-0 xl:pr-5"
                  >
                    <Button name="Buscar" />
                    <Button name="Borrar filtros" />
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className="lg:flex">
          <section
            className=" bg-gray-100 px-5 mx-auto h-auto py-10 
      border-b-[1px] border-solid border-b-slate-300
    lg:w-1/3"
          >
            <h1
              className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
        "
            >
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
              <span className="mx-1 ">Atención Personalizada</span>

              <FontAwesomeIcon
                icon={faPersonCircleCheck}
                beat
                style={{ color: "#f87171" }}
              />
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
            </h1>
            <p
              className="px-3 text-sm text-gray-900
        sm:px-10 sm:py-2"
            >
              Nos dedicamos a brindar un servicio exclusivo a nuestros clientes,
              con un compromiso honesto y mucha predisposición. 20 Años de
              experiencia y nuestro apellido como respaldo. Nuestros clientes
              también son nuestra familia. Acérquese a nuestras sucursales o
              llamenos ahora para conocernos.
            </p>
          </section>
          <section
            className=" bg-white px-5 mx-auto h-auto py-10 
      border-b-[1px] border-solid border-b-slate-300
      lg:w-1/3"
          >
            <h1
              className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center"
            >
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
              <span className="mx-3 ">Operaciones Simples</span>

              <FontAwesomeIcon icon={faCar} beat style={{ color: "#f87171" }} />
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
            </h1>
            <p
              className="px-3 text-sm text-gray-900
        sm:px-10 sm:py-2"
            >
              Le facilitamos la gestión de toda la operatoria para que vender su
              auto y comprar uno nuevo sea rápido y eficaz. Además lo asesoramos
              y podemos tomar su vehículo en consignación. En Munafó Automóviles
              valoramos su tiempo y su confianza, y por eso le aseguramos un
              buen negocio siempre.
            </p>
          </section>
          <section
            className=" bg-gray-100 px-5 mx-auto h-auto py-10 
      border-b-[1px] border-solid border-b-slate-300
      lg:w-1/3"
          >
            <h1
              className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center"
            >
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
              <span className="mx-1 ">Servicio PosVenta</span>

              <FontAwesomeIcon
                icon={faWrench}
                beat
                style={{ color: "#f87171" }}
              />
              <span
                aria-hidden="true"
                className="flex-grow bg-red-400 rounded h-0.5"
              ></span>
            </h1>
            <p
              className="px-3 text-sm text-gray-900
        sm:px-10 sm:py-2"
            >
              Nos aseguramos el perfecto estado de nuestros vehículos y
              proveemos servicios integrales de mecánica preventiva para autos
              de todas las gamas. Electrónica avanzada, cabina de pintura
              ISO9001, personal capacitado y toda la tecnología en un sólo
              lugar.
            </p>
          </section>
        </div>
      </div>

      <section
        className="bg-white px-5 mx-auto h-auto py-10
      lg:w-5/6"
      >
        <h1 className=" flex items-center text-2xl py-5 px-2 font-bold tracking-tight text-red-500 text-center">
          <span
            aria-hidden="true"
            className="flex-grow bg-red-400 rounded h-0.5"
          ></span>
          <span
            className="mx-2 
          lg:text-3xl"
          >
            Novedades
          </span>
          <FontAwesomeIcon
            icon={faCarSide}
            beatFade
            style={{ color: "#f87171" }}
          />
          <span
            aria-hidden="true"
            className="flex-grow bg-red-400 rounded h-0.5"
          ></span>
        </h1>
        <p
          className="px-3 text-sm text-gray-900 mb-4
        lg:text-lg"
        >
          Lo invitamos a ver nuestros vehículos en venta, actualizados
          diariamente.
        </p>
        <Carousel>
          {data.map((item, i) => (
            <div key={i}>
              <CardCarousel props={item} />
            </div>
          ))}
        </Carousel>
      </section>
      <Newsletter className="w-full" />
      <Footer />
    </>
  );
}

export default HomePage;
