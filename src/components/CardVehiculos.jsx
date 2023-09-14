import React from "react";
import image from "../images/auto-2179220-1920.jpg";

export default function CardVehiculos(props) {
  return (
    <div
      className="hover:bg-gray-200 cursor-pointer   max-w-sm rounded-2xl overflow-hidden shadow-xl min-w-[220px] p-1 h-auto
    xl:min-w-[320px]"
    >
      <img
        className="w-full p-1 rounded-2xl bg-gray-50"
        src={image}
        alt={`${props.car.title}`}
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-base text-center text-red-700 mb-2 xl:text-lg">
          {props.car.title}
        </div>
        <p className="text-gray-800 text-sm xl:text-lg text-center">
          U$S {props.car.price}
        </p>
        <p className="text-gray-800 text-sm xl:text-lg text-center">
          U$S {props.car.date}
        </p>
        <p className="text-gray-800 text-sm xl:text-lg text-center">
          U$S {props.car.popularity}
        </p>
      </div>
    </div>
  );
}
