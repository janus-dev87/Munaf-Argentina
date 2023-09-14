import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CarFilter from "../components/CarFilter";
import carData from "../carData";
import CardVehiculos from "../components/CardVehiculos";
import Button from "../components/Button";
import DropdownsFilters from "../components/DropdownsFilters";
import Pagination from "../components/Pagination";

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
      <section className="pt-28 px-5 pb-12 md:pt-52 lg:pt-60">
        <div className="py-4">
          <CarFilter cars={carData} onFilterChange={handleFilterChange} />
          <div className="text-right px-2">
            <Button name="Filtros" onclick={toggleSidebar} />
          </div>
        </div>
        {sideBarOpen && (
          <div className="text-center space-x-3 space-y-3 pb-5">
            <DropdownsFilters options={marcas} />
            <DropdownsFilters options={year} />
            <DropdownsFilters options={model} />
            <DropdownsFilters options={kilometers} />
            <DropdownsFilters options={price} />
          </div>
        )}
        <div
          className="grid grid-cols-1 space-y-5 justify-items-center
        md:grid-cols-2 md:space-y-0 md:gap-8
        lg:grid-cols-3 lg:gap-10 lg:pt-4"
        >
          {data.map((car, index) => (
            <CardVehiculos key={index} car={car} />
          ))}
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
