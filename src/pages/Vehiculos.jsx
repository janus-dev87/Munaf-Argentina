import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FiltrosVehiculos from "../components/FiltrosVehiculos";
import CarFilter from "../components/CarFilter";
import carData from "../carData";
import CardVehiculos from "../components/CardVehiculos";
import Button from "../components/Button";
import DropdownsFilters from "../components/DropdownsFilters";
import Pagination from "../components/Pagination";
import FiltroRango from "../components/FiltroRango";

function Vehiculos() {
  const [data, setData] = useState(carData);
  const [sideBarOpen, setSideBarOpen] = useState(false);

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

  const kilometersFiltro = {
    title: "Kilómetros",
    options: [
      { name: "0 km", quantity: 26.51 },
      { name: "0 a 40.000 km", quantity: 13.222 },
      { name: "40.000 a 75.000 km", quantity: 15.532 },
      { name: "75.000 a 100.000 km", quantity: 14.256 },
      { name: "100.000 km o más", quantity: 37.884 },
    ],
    range: {
      min: "Mínimo",
      max: "Máximo",
    },
  };

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
      <section className="pt-28 px-5 pb-12 md:pt-36 lg:pt-32  lg:px-16 xl:pt-56">
        <div className="py-4 md:hidden lg:hidden">
          <CarFilter cars={carData} onFilterChange={handleFilterChange} />
          <div className="text-right px-2 lg:hidden">
            <Button name="Filtros" onclick={toggleSidebar} />
          </div>
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

        <h1 className="text-2xl font-bold py-2 lg:text-3xl md:hidden">
          Todos los vehículos
        </h1>
        <p className="text-base text-gray-500 lg:text-xl pb-5 md:hidden">
          130 Unidades Encontradas
        </p>
        <div className="lg:flex lg:gap-x-12 md:justify-center lg:py-8">
          <div
            className="hidden lg:flex  lg:flex-col lg:items-start lg:justify-start  lg:pt-10 whitespace-nowrap
          xl:mr-20 max-w-xs"
          >
            <FiltrosVehiculos data={modelFilter} />
            <FiltrosVehiculos data={brandFilter} />
            <FiltroRango data={kilometersFiltro} />
          </div>
          <div>
            <div className="md:flex items-center py-px hidden lg:pt-10 xl:pt-0">
              <div className="w-1/2">
                <h1 className="text-2xl font-bold lg:text-3xl hidden md:block">
                  Todos los vehículos
                </h1>
                <p className="text-base text-gray-500 lg:text-xl hidden md:block">
                  130 Unidades Encontradas
                </p>
              </div>
              <div className="py-4 w-1/2">
                <CarFilter cars={carData} onFilterChange={handleFilterChange} />
                <div className="text-right px-2 lg:hidden">
                  <Button name="Filtros" onclick={toggleSidebar} />
                </div>
              </div>
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
        </div>
        <div className="pt-8">
          <Pagination />
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}

export default Vehiculos;
