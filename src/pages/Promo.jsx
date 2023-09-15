import React, { useState } from "react";
import image from "../images/logo_512.png";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CarFilter from "../components/CarFilter";
import carData from "../carData";
import DropdownsFilters from "../components/DropdownsFilters";
import Pagination from "../components/Pagination";
import CardVehiculos from "../components/CardVehiculos";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FiltrosVehiculos from "../components/FiltrosVehiculos";

function Promo() {
  const [data, setData] = useState(carData);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const modelFilter = {
    title: "Modelo",
    options: [
      { name: "Amarok", quantity: 6.741 },
      { name: "208", quantity: 4.851 },
      { name: "Hilux", quantity: 3.381 },
      { name: "Cronos", quantity: 2.646 },
      { name: "Ranger", quantity: 2.184 },
      { name: "Kangoo", quantity: 2.079 },
      { name: "Corolla", quantity: 1.701 },
      { name: "Tracker", quantity: 1.407 },
      { name: "Vento", quantity: 1.365 },
    ],
  };

  const brandFilter = {
    title: "Marca",
    options: [
      { name: "Amarok", quantity: 6.741 },
      { name: "208", quantity: 4.851 },
      { name: "Hilux", quantity: 3.381 },
      { name: "Cronos", quantity: 2.646 },
      { name: "Ranger", quantity: 2.184 },
      { name: "Kangoo", quantity: 2.079 },
      { name: "Corolla", quantity: 1.701 },
      { name: "Tracker", quantity: 1.407 },
      { name: "Vento", quantity: 1.365 },
    ],
  };

  const marcas = {
    title: "Marca",
    options: [
      "Ferrari",
      "Porsche",
      "Mercedes",
      "Ferrari",
      "Ferrari",
      "Porsche",
      "Mercedes",
      "Ferrari",
    ],
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

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleFilterChange = (selectedValue) => {
    const sortedData = [...data];
    switch (selectedValue) {
      case "priceHighToLow":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        sortedData.sort((a, b) => a.price - b.price);
        break;
      case "newest":
        sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "popular":
        sortedData.sort((a, b) => b.popularity - a.popularity);
        break;

      default:
        break;
    }
    setData(sortedData);
  };
  console.log(data);
  console.log(sideBarOpen);

  return (
    <>
      <Navbar className="mb-10" />
      <section>
        <div className="flex flex-col items-center justify-center bg-hero-image h-screen bg-cover bg-gray-800/50 bg-blend-multiply ">
          <img src={image} alt="" className="w-1/4 mb-3" />
          <h1
            className="text-gray-50 font-bold text-4xl
          lg:text-5xl
          xl:text-6xl"
          >
            PROMO 60-40
          </h1>
          <p
            className="text-gray-50 text-xl 
          lg:text-2xl
          xl:text-3xl"
          >
            Tu usado y saldo en cuotas
          </p>
          <p
            className="text-gray-50 text-xl 
          lg:text-2xl
          xl:text-3xl"
          >
            SIN INTERÉS - FIJAS - EN DÓLARES
          </p>
        </div>
        <div className="px-6 py-8 text-center space-y-3 md:py-16">
          <h1 className="text-xl font-bold lg:text-2xl">
            PROMO EXCLUSIVA POR TIEMPO LIMITADO
          </h1>
          <p className="text-lg text-custom-red font-semibold lg:text-xl">
            Entregá tu usado o efectivo y pagá el saldo en cuotas SIN INTERESES
          </p>
          <p>
            Retirás con el 60% del valor de lista de cualquiera de estas
            unidades.
          </p>
          <p>Te financiamos el saldo del 40%.</p>
          <p>En cómodas cuotas fijas sin interés en dólares.</p>
          <p>Tomamos tu usado en parte de pago.</p>
          <p>Planes a Medida</p>
          <Button name="Contáctanos" />
        </div>
        <section className="px-6 py-6 md:pt-0 md:pb-16 lg:px-16">
          <div className="py-4 md:pb-4 md:pt-0">
            <CarFilter cars={carData} onFilterChange={handleFilterChange} />
            <div className="text-right px-2 lg:hidden">
              <Button name="Filtros" onclick={toggleSidebar} />
            </div>
            {sideBarOpen && (
              <div
                className="text-center space-x-3 space-y-3 pb-5 
          lg:hidden"
              >
                <DropdownsFilters options={marcas} />
                <DropdownsFilters options={year} />
                <DropdownsFilters options={model} />
                <DropdownsFilters options={kilometers} />
                <DropdownsFilters options={price} />
              </div>
            )}
          </div>
          <div className="lg:flex lg:gap-x-12   lg:justify-center">
            <div
              className="hidden lg:flex lg:flex-col lg:items-start lg:justify-start lg:mr-16 lg:pt-10 whitespace-nowrap
          xl:mr-24"
            >
              <FiltrosVehiculos data={modelFilter} />
              <FiltrosVehiculos data={brandFilter} />
            </div>
            <div
              className="grid grid-cols-1 space-y-5 justify-items-center
        md:grid-cols-2 md:space-y-0 md:gap-8
        lg:grid-cols-3 lg:gap-10 lg:pt-4"
            >
              {data.map((car, index) => (
                <CardVehiculos key={index} car={car} />
              ))}
            </div>
          </div>
          <div className="pt-8 md:pt-10">
            <Pagination />
          </div>
        </section>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Promo;
