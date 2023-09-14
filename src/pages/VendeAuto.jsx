import React from "react";
import Navbar from "../components/Navbar";

function VendeAuto() {
  return (
    <>
      <Navbar />
      <section>
        <div className="flex flex-col items-center justify-center bg-hero-image h-screen bg-cover bg-gray-800/50 bg-blend-multiply px-8">
          <h1
            className="text-gray-50 font-bold text-4xl
          lg:text-5xl
          xl:text-6xl"
          >
            Vendé tu auto
          </h1>
          <div className="text-center">
            <p
              className="text-gray-50 text-xl 
          lg:text-2xl
          xl:text-3xl"
            >
              Aprovechá hoy y vendé tu auto con las mejores condiciones del
              mercado.
            </p>
            <p
              className="text-gray-50 text-xl 
          lg:text-2xl
          xl:text-3xl"
            >
              Te brindamos ser parte de nuestra Red Privada Munafó, envianos la
              información de tu auto
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default VendeAuto;
