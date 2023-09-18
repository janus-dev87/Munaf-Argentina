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
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../components/Carousel";
import CardCarousel from "../components/CardCarousel";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import HomeCarousel from "../components/HomeCarousel";
import BackgroundCarousel from "../components/BackgroundCarousel";
import data from "../data";
import images from "../images";
import imageBienvenido from "../images/2021-11-08.jpg";

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
      <section className="h-[100vh] relative w-full  bg-blend-multiply ">
        <div className="h-full absolute top-0  w-full">
          <HomeCarousel />
          {/*  {images.map((item, i) => (
              <div key={i}>
                <BackgroundCarousel props={item} />
              </div>
            ))}
          </HomeCarousel> */}
        </div>
        <Navbar className="fixed top-0 right-0" />
        <section
          className="h-auto w-full absolute bottom-0 mx-auto bg-gray-950/60 px-3 py-5
          shadow-2xl shadow-gray-800
           
           xl:border-r-[1px] xl:border-solid xl:border-r-gray-300
            xl:border-b-[1px]  xl:border-b-gray-300 xl:h-[20vh] xl:flex xl:flex-col xl:justify-center 
           border-b-[1px] border-solid border-b-gray-800"
        >
          <div className="mx-auto">
            <h1
              className=" flex items-center text-2xl py-4 px-2 
              font-bold tracking-tight text-custom-red text-center
              xl:pr-5"
            >
              <span
                aria-hidden="true"
                className="flex-grow bg-custom-red rounded h-0.5"
              ></span>
              <span className="mx-3 xl:text-3xl">Encontrá tu próximo auto</span>
              <span
                aria-hidden="true"
                className="flex-grow bg-custom-red rounded h-0.5"
              ></span>
            </h1>
            <section>
              <div
                className="w-full mx-auto items-center flex justify-around flex-wrap py-4
                xl:justify-between
                 xl:space-x-4"
              >
                <input
                  id="search"
                  name="search"
                  type="text"
                  className="h-auto rounded-md border-0 bg-gray-600 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 
                  sm:text-sm sm:leading-6 lg:text-lg xl:text-lg"
                  placeholder="Ingresa tu búsqueda"
                />
                <div
                  className=" justify-center space-x-4  hidden
                   
                  lg:flex items-center"
                >
                  <Dropdowns options={marcas} />
                  <Dropdowns options={year} />
                  <Dropdowns options={model} />
                  <Dropdowns options={kilometers} />
                  <Dropdowns options={price} />
                </div>
                <div
                  className=" justify-center space-x-4 hidden
                  sm:mb-6 xl:pr-5"
                ></div>
                <div
                  className="flex  space-x-5
                  sm:justify-center sm:items-center sm:mt-0 xl:pr-5"
                >
                  <Button
                    name={
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: "white" }}
                        className="xl:text-sm xl:h-5 xl:w-5"
                      />
                    }
                  />

                  <div className="hidden">
                    <Button name="Borrar filtros" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>

      <Banner />
      <div className=" xl:mx-auto xl:bg-white sm:bg-white">
        <div className="xl:bg-white xl:flex">
          <div className="md:bg-white">
            <section
              className=" flex flex-col items-center justify-center py-12 mx-auto  px-5 
            lg:w-full  lg:border-b-slate-300 lg:flex-row lg:gap-x-16 lg:px-14
            xl:py-32
           xl:border-0
            border-b-[2px] border-solid border-b-slate-400/50"
            >
              <div
                className=" mx-auto w-11/12 flex flex-col justify-center items-center
               lg:w-1/2 lg:items-start"
              >
                <h1
                  className=" flex items-center text-4xl py-5 px-2 font-bold tracking-tight text-red-500 text-center
                sm:px-12
                lg:px-0
                lg:text-left
                xl:text-5xl"
                >
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-red-400 rounded h-0.5"
                  ></span>
                  <span className="mx-3 lg:mx-0 ">Bienvenidos</span>
                  <span
                    aria-hidden="true"
                    className="flex-grow bg-red-400 rounded h-0.5"
                  ></span>
                </h1>
                <p
                  className="text-lg text-gray-950/75 py-2 px-2 text-center
                 lg:px-0
                lg:text-left
                xl:text-xl"
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
                <div className="py-5">
                  <Button name="Conócenos" />
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <img
                  src={imageBienvenido}
                  alt="Bienvenidos"
                  className="shadow-lg shadow-gray-500/60 rounded-2xl sm:mx-2 sm:w-4/5 md:w-3/5 lg:w-full"
                />
              </div>
            </section>
          </div>
          {/*  <section
            className="h-auto min-h-[400px] mx-auto bg-white px-3 py-12
          md:w-11/12
           lg:w-3/4 
           xl:w-1/2
           
           xl:border-r-[1px] xl:border-solid xl:border-r-gray-300
            xl:border-b-[1px]  xl:border-b-gray-300
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
          </section> */}
        </div>
        <div
          className="bg-white lg:py-10  
        lg:flex lg:flex-col lg:items-center lg:justify-center
        xl:py-32"
        >
          <h1
            className="text-custom-red mx-auto py-3 text-5xl font-semibold tracking-widest text-center hidden 
          lg:block
          xl:text-4xl"
          >
            Nuestros Beneficios
          </h1>
          <div className="lg:flex lg:py-12">
            <section
              className=" px-5 mx-auto h-auto py-10 
      border-b-[2px] border-solid border-b-slate-400/20
    lg:w-1/3 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center"
            >
              <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
                <FontAwesomeIcon
                  icon={faPersonCircleCheck}
                  style={{ color: "#f87171" }}
                  className="hidden lg:block lg:h-14 lg:py-2"
                />
              </div>
              <h1
                className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
         sm:px-24
         lg:px-5 lg:block
         xl:text-2xl
        "
              >
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden"
                ></span>
                <span className="mx-1 ">Atención Personalizada</span>

                <FontAwesomeIcon
                  icon={faPersonCircleCheck}
                  beat
                  style={{ color: "#f87171" }}
                  className="lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden"
                ></span>
              </h1>
              <p
                className="px-3 text-sm text-gray-900/90
        sm:px-36 sm:py-2
        lg:px-5 lg:text-center
        xl:text-base"
              >
                Nos dedicamos a brindar un servicio exclusivo a nuestros
                clientes, con un compromiso honesto y mucha predisposición. 20
                Años de experiencia y nuestro apellido como respaldo. Nuestros
                clientes también son nuestra familia. Acérquese a nuestras
                sucursales o llamenos ahora para conocernos.
              </p>
            </section>
            <section
              className=" bg-white px-5 mx-auto h-auto py-10 
            border-b-[2px] border-solid border-b-slate-400/30
      lg:w-1/3 lg:border-r lg:flex lg:flex-col lg:justify-center lg:items-center lg:border-r-slate-200 lg:border-l lg:border-l-slate-200 lg:border-b-0"
            >
              <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
                <FontAwesomeIcon
                  icon={faCar}
                  style={{ color: "#f87171" }}
                  className="hidden lg:block lg:h-14 lg:py-2"
                />
              </div>
              <h1
                className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
        sm:px-24
        lg:px-5 lg:block
        lg:text-2xl"
              >
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden"
                ></span>
                <span className="mx-3 ">Operaciones Simples</span>

                <FontAwesomeIcon
                  icon={faCar}
                  beat
                  style={{ color: "#f87171" }}
                  className="lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden"
                ></span>
              </h1>
              <p
                className="px-3 text-sm text-gray-900/90
              sm:px-36 sm:py-2
              lg:px-5 lg:text-center 
              xl:text-base"
              >
                Le facilitamos la gestión de toda la operatoria para que vender
                su auto y comprar uno nuevo sea rápido y eficaz. Además lo
                asesoramos y podemos tomar su vehículo en consignación. En
                Munafó Automóviles valoramos su tiempo y su confianza, y por eso
                le aseguramos un buen negocio siempre.
              </p>
            </section>
            <section
              className=" bg-white px-5 mx-auto h-auto py-10 
            border-b-[2px] border-solid border-b-slate-300
      lg:w-1/3 lg:border-b-slate-200 lg:border-b-0 lg:flex lg:flex-col lg:justify-center lg:items-center"
            >
              <div className="rounded-full hidden lg:block bg-red-50/75 p-12">
                <FontAwesomeIcon
                  icon={faWrench}
                  style={{ color: "#f87171" }}
                  className="hidden lg:block lg:h-14 lg:py-2"
                />
              </div>
              <h1
                className=" flex items-center text-2xl py-5 px-2 
        font-bold tracking-tight text-red-500 text-center
        sm:px-24
        lg:px-5 lg:block
        xl:text-2xl"
              >
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden"
                ></span>
                <span className="mx-1 ">Servicio PosVenta</span>

                <FontAwesomeIcon
                  icon={faWrench}
                  beat
                  style={{ color: "#f87171" }}
                  className="lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="flex-grow bg-red-400 rounded h-0.5 lg:hidden "
                ></span>
              </h1>
              <p
                className="px-3 text-sm text-gray-900/90
              sm:px-36 sm:py-2
              lg:px-5 lg:text-center
              xl:text-base"
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
      </div>
      <div className="lg:bg-white">
        <section
          className="bg-white lg:bg-white px-5 mx-auto h-auto py-10
        border-b-[2px] border-solid border-b-slate-400/50
      lg:px-16 lg:flex lg:flex-col lg:justify-center
      xl:space-y-10
      xl:py-32"
        >
          <h1 className=" flex items-center text-5xl py-5 px-2 font-bold tracking-tight text-red-500 text-center">
            <span
              aria-hidden="true"
              className="flex-grow bg-red-400 rounded h-0.5"
            ></span>
            <span
              className="mx-3 lg:ml-6
          lg:text-5xl
          "
            >
              Novedades
            </span>
            <FontAwesomeIcon
              icon={faCarSide}
              style={{ color: "#f87171" }}
              className="mx-2 lg:mr-6 xl:h-18"
            />
            <span
              aria-hidden="true"
              className="flex-grow bg-red-400 rounded h-0.5"
            ></span>
          </h1>
          <p
            className="px-3 text-center text-sm text-gray-900 mb-4
        lg:text-lg 
        xl:text-xl"
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
      </div>
      <Newsletter className="w-full" />
      <Footer />
    </>
  );
}

export default HomePage;
