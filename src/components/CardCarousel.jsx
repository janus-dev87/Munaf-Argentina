import React from "react";
import image from "../images/auto-2179220-1920.jpg";

export default function CardCarousel(props) {
  return (
    <div
      class="hover:bg-gray-200 bg-gray-300/40 cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-xl shadow-gray-400/70 min-w-[220px] p-1 m-1 mr-8 h-auto
    xl:min-w-[320px]"
    >
      <div className="p-2">
        <img
          class="w-full rounded-2xl bg-gray-50"
          src={image}
          alt={`${props.props.title}`}
        />
      </div>
      <div class="px-3 py-4 ">
        <div class="font-bold text-sm text-left text-gray-800 mb-2 xl:text-lg">
          {props.props.title}
        </div>
        <p class="text-gray-800 text-lg text-left font-bold">
          U$S {props.props.price}
        </p>
        <p class="text-gray-800 text-lg text-left font-bold">
          {props.props.year} / {props.props.km} km
        </p>
      </div>
    </div>
  );
}
