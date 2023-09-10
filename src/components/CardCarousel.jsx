import React from "react";
import image from "../images/auto-2179220-1920.jpg";

export default function CardCarousel(props) {
  return (
    <div
      class="hover:bg-gray-200 cursor-pointer   max-w-sm rounded-2xl overflow-hidden shadow-xl min-w-[220px] p-1 m-1 mr-8 h-auto
    xl:min-w-[320px]"
    >
      <img
        class="w-full p-1 rounded-2xl bg-gray-50"
        src={image}
        alt={`${props.props.title}`}
      />
      <div class="px-6 py-4 ">
        <div class="font-bold text-sm text-center text-red-700 mb-2 xl:text-lg">
          {props.props.title}
        </div>
        <p class="text-gray-800 text-lg text-center">U$S {props.props.price}</p>
      </div>
    </div>
  );
}
