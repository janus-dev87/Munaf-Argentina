import React from "react";
import image from "../images/auto-2179220-1920.jpg";

export default function CardVehiculos(props) {
  return (
    <div
      className="hover:bg-gray-200 cursor-pointer bg-gray-300/40  max-w-sm rounded-2xl overflow-hidden shadow-xl shadow-gray-400/70 min-w-[220px] p-1 h-auto
    xl:min-w-[280px]"
    >
      <div className="p-2">
        <img
          className="w-full rounded-2xl bg-gray-50"
          src={image}
          alt={`${props.car.title}`}
        />
      </div>
      <div className="px-3 py-4 ">
        <div className="font-bold text-sm text-left text-red-700 mb-2 xl:text-lg">
          {props.car.title}
        </div>
        <p className="text-gray-800 text-lg text-left font-bold">
          U$S {props.car.price}
        </p>
        <p className="text-gray-800 text-lg text-left font-bold">
          {props.car.year} / {props.car.km} km
        </p>
      </div>
    </div>
  );
}
