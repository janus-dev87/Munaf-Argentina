import React from "react";
import { useState } from "react";

export default function CarFilter({ cars, onFilterChange }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onFilterChange(selectedValue);
  };

  return (
    <div className="my-4 text-right md:text-right md:px-2">
      <label htmlFor="filter" className="mr-2">
        Ordendar por:
      </label>
      <select
        id="filter"
        value={selectedOption}
        onChange={handleOptionChange}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Seleccionar</option>
        <option value="priceHighToLow">Precio: más alto a más bajo</option>
        <option value="priceLowToHigh">Precio: más bajo a más alto</option>
        <option value="newest">Más recientes</option>
        <option value="popular">Más populares</option>
      </select>
    </div>
  );
}
