import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Ícono de estrella llena
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons"; // Ícono de estrella vacía

function Star({ rating }) {
  // Calcula cuántas estrellas llenas y vacías mostrar
  const filledStars = Array(rating).fill(
    <FontAwesomeIcon icon={faStar} style={{ color: "#ffe014" }} />
  );
  const emptyStars = Array(5 - rating).fill(
    <FontAwesomeIcon icon={faStarEmpty} style={{ color: "#8f8f8f" }} />
  );

  return (
    <span className="text-base">
      {filledStars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
      {emptyStars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </span>
  );
}

export default Star;
