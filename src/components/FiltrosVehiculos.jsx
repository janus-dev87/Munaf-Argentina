import React from "react";

export default function FiltrosVehiculos(props) {
  const { title, options } = props.data;
  return (
    <>
      <div className="py-4">
        <h1 className="text-xl font-bold text-gray-950 pb-2 xl:text-2xl">
          {title}
        </h1>
        <div className="text-sm text-gray-700 space-y-1 xl:text-base">
          {options.map((model) => (
            <p key={model.name} className="cursor-pointer">
              {model.name} ({model.quantity})
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
