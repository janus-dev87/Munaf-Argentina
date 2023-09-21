import React from "react";

export default function BackgroundCarousel(props) {
  return (
    <div className="w-screen h-screen relative bg-hero-image bg-cover bg-center bg-gray-800/50 bg-blend-multiply">
      <h1 className="top-1/2 absolute text-gray-100">{props.props.title}</h1>
      <h2 className="">{props.props.subtitle}</h2>
    </div>
  );
}
