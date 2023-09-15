import React from "react";
import Navbar from "../components/Navbar";
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
  return (
    <>
      <Navbar />
      <section>
        <div className="flex flex-col space-y-10 items-center justify-center bg-hero-image h-screen bg-cover bg-gray-800/50 bg-blend-multiply px-8">
          <h1
            className="text-gray-50 mt-[50%] font-bold text-5xl
          lg:text-5xl
          xl:text-6xl"
          >
            Vendé tu auto
          </h1>
          <div className="mb-4">
            <p
              className="text-gray-50 text-lg text-center
          lg:text-2xl
          xl:text-3xl"
            >
              Aprovechá hoy y vendé tu auto con las mejores condiciones del
              mercado.
            </p>
            <p
              className="text-gray-50 text-lg text-center
          lg:text-2xl
          xl:text-3xl"
            >
              Te brindamos ser parte de nuestra Red Privada Munafó, envianos la
              información de tu auto
            </p>
          </div>
        </div>
        <section className="py-12 px-12">
          <ol className="list-decimal space-y-4">
            {textList.map((question) => {
              return <li key={question.key}>{question.description}</li>;
            })}
          </ol>
        </section>
      </section>
    </>
  );
}

export default VendeAuto;
