import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/munafo_logo_270x65v1.png";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-gray-700 text-gray-200 text-base-content rounded">
      <img
        src={logo}
        alt=""
        className="w-3/5 mx-auto mb-6
      sm:w-1/3
      lg:w-1/4"
      />
      <nav className="flex flex-wrap items-center justify-center gap-4">
        <a className="link link-hover">Inicio</a>
        <a className="link link-hover">Vehículos</a>
        <a className="link link-hover">Promo 60-40</a>
        <a className="link link-hover">Vendé tu auto</a>
        <a className="link link-hover">Servicio mecánico</a>
        <a className="link link-hover">La empresa</a>
        <a className="link link-hover">Contáctanos</a>
      </nav>
      <nav>
        <div className="flex flex-wrap items-start justify-center gap-4 my-4">
          <a>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ffffff" }}
              className="w-7 h-7"
            />
          </a>
          <a>
            <FontAwesomeIcon
              className="w-7 h-7"
              icon={faInstagram}
              style={{ color: "#ffffff" }}
            />
          </a>
          <a>
            <FontAwesomeIcon
              className="w-7 h-7"
              icon={faYoutube}
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-center">
          Copyright © 2023 - Todos los derechos Reservados - Munafo
        </p>
      </aside>
    </footer>
  );
}
