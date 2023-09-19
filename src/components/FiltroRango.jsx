import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FiltrosVehiculos(props) {
  const { title, options, range } = props.data;
  return (
    <>
      <div className="py-4">
        <h1 className="text-xl font-bold text-gray-950 pb-2">{title}</h1>
        <div className="text-sm text-gray-700 space-y-1">
          {options.map((model) => (
            <p key={model.name} className="cursor-pointer">
              {model.name} ({model.quantity})
            </p>
          ))}
          <div className="space-x-1 flex w-[90%] xl:w-[65%]">
            <input
              type="number"
              name="minimo"
              id="minimo"
              className="w-2/5 px-1.5 py-1 rounded-md border 
              "
              placeholder={range.min}
            />
            <span className="text-gray-800 text-lg">-</span>
            <input
              type="number"
              name="maximo"
              id="maximo"
              className="w-2/5 px-1.5 py-1 rounded-md border relative
              "
              placeholder={range.max}
            />

            <button className="w-1/5 border rounded-3xl bg-custom-red cursor-pointer">
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
