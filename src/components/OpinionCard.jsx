import React from "react";
import Stars from "./Stars"; // Asegúrate de importar el componente Star si aún no lo has hecho

function OpinionCard({ opinion }) {
  const { name, rating, content, description } = opinion;

  return (
    <div
      className="bg-white shadow-md shadow-gray-700/25 rounded-lg py-8 px-5 max-w-[250px] min-h-[220px]
    md:w-2/5"
    >
      <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="mt-1 flex items-center space-x-2">
          <Stars rating={rating} />
          <p>{rating}.0</p>
        </div>
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
}

export default OpinionCard;
