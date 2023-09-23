import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import imageBienvenido from "../images/2021-11-08.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleCheck,
  faCar,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PersonCard from "../components/PersonCard";

function Empresa() {
  const management = [
    {
      name: "Juan Ignacio Munafó",
      job: "Presidente",
      bio: "Apasionado por el futbol, Nacho es reconocido en el ambiente por su buen humor y fiel manera de hacer negocios.",
      phone: "541147909935",
      tel: "5491136332937",
      email: "munafonacho@hotmail.com",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Matías Munafó",
      job: "Director Marketing",
      bio: "Creativo, inquieto, amante de la música y los motores. Matías también se crió en el rubro y junto a su hermano Nacho, conducen la estrategia de la empresa.",
      phone: "541147907490",
      tel: "5491121912051",
      email: "matias@munafoautomoviles.com",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];
  return (
    <>
      <Navbar />
      <section className="py-10">
        <div className=" xl:mx-auto xl:bg-white sm:bg-white">
          <div className="xl:bg-white xl:flex">
            <div className="md:bg-white">
              <section
                className=" flex flex-col items-center justify-center py-12 mx-auto  px-5 
                md:py-28
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
                    trabajando dia a dia para lograr brindar una mejor atención
                    al cliente. Podemos facilitarle la gestion de la venta de su
                    usado mediante nuestra Red Privada Munafó (RPM), tomarlo en
                    consignación o simplemente comprarlo a un precio razonable.
                    Además, proveemos servicios financieros para que cuente con
                    facilidades muy convenientes según sus ingresos. Comience
                    con la experiencia de cambiar su automóvil ahora.
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
          </div>
          <div
            className="bg-white 
        lg:flex lg:flex-col lg:items-center lg:justify-center
        xl:py-32 xl:pb-2"
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
                  Le facilitamos la gestión de toda la operatoria para que
                  vender su auto y comprar uno nuevo sea rápido y eficaz. Además
                  lo asesoramos y podemos tomar su vehículo en consignación. En
                  Munafó Automóviles valoramos su tiempo y su confianza, y por
                  eso le aseguramos un buen negocio siempre.
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
                  proveemos servicios integrales de mecánica preventiva para
                  autos de todas las gamas. Electrónica avanzada, cabina de
                  pintura ISO9001, personal capacitado y toda la tecnología en
                  un sólo lugar.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-8 pb-12 flex flex-col justify-center items-center space-y-5
      lg:py-0 lg:pb-12 xl:pb-20 xl:space-y-12"
      >
        <h1 className="text-2xl font-bold text-red-500 lg:text-4xl ">
          Gerencia
        </h1>
        <div
          className="space-y-5 
        md:space-y-0 md:space-x-8 md:flex
         xl:w-full xl:justify-center xl:space-x-12"
        >
          {management.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Empresa;
