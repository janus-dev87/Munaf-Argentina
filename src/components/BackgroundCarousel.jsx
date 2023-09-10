import React from "react";
import image from "../images/auto-2179220-1920.jpg";
import image2 from "../images/mercedes-benz-841465_1920.jpg";

export default function BackgroundCarousel(props) {
  return (
    <div className="w-screen h-screen relative bg-hero-image bg-cover bg-center bg-gray-800/50 bg-blend-multiply">
      <h1 className="top-1/2 absolute text-gray-100">{props.props.title}</h1>
      <h2 className="">{props.props.subtitle}</h2>
    </div>
  );
}
