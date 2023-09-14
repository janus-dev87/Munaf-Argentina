import React from "react";
import image from "../images/logo_512.png";
import Navbar from "../components/Navbar";

function Promo() {
  return (
    <>
      <Navbar className="mb-10" />
      <section>
        <div className="flex flex-col items-center justify-center bg-hero-image h-screen bg-cover bg-gray-800/50 bg-blend-multiply ">
          <img src={image} alt="" className="w-1/4" />
          <h1 className="text-gray-50 font-bold text-4xl">PROMO 60-40</h1>
          <p className="text-gray-50 text-xl">Tu usado y saldo en cuotas</p>
          <p className="text-gray-50 text-xl">
            SIN INTERÉS - FIJAS - EN DÓLARES
          </p>
        </div>
      </section>
    </>
  );
}

export default Promo;
