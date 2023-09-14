import { Fragment } from "react";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import image from "../images/munafo_logo_270x65v1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "INICIO", href: "/", current: true },
  { name: "VEHÍCULOS", href: "/vehiculos", current: false },
  { name: "PROMO 60-40", href: "/promo", current: false },
  { name: "VENDÉ TU AUTO", href: "/vende-tu-auto", current: false },
  { name: "SERVICIO MECÁNICO", href: "/servicio", current: false },
  { name: "LA EMPRESA", href: "/empresa", current: false },
  { name: "CONTÁCTANOS", href: "/contacto", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-950/60 md:h-[12vh] lg:h-[14vh]
       rounded-b-3xl fixed w-full z-50 mx-auto md:flex md:items-center
      xl:w-screen"
    >
      {({ open }) => (
        <>
          <div className=" mx-auto  px-2 w-full pt-2 lg:pt-0 ">
            <div className="flex  justify-around text-center mb-[-5px] lg:mb-2 xl:mb-2.5 xl:justify-center xl:space-x-36">
              <p className=" text-gray-200 text-xs lg:text-base xl:text-lg">
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "#ffffff" }}
                  className="mr-2"
                />
                Av. Del Libertador 14745, Acassuso, Bs. As.
              </p>
              <p className="  text-gray-200 text-xs lg:text-base xl:text-lg">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#ffffff" }}
                  className="mr-2"
                />
                11 4792 5820
              </p>
            </div>

            <div className="relative flex h-16 items-center justify-between xl:max-w-full">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-custom-red hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  justify-around sm:items-stretch xl:items-center">
                <div className="flex  items-center  ">
                  <img
                    className="h-[1.6rem] w-11/12  lg:h-[40px] lg:w-full xl:w-full xl:h-12"
                    src={image}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:block lg:ml-[3vw] xl:ml-[7vw]">
                  <div className="flex  items-center sm:space-x-1 md:space-x-3">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? "bg-custom-red text-white hover:text-white rounded-md px-3 py-2 text-xs font-medium text-center lg:text-lg"
                            : "text-gray-300 hover:bg-custom-red hover:text-white rounded-md px-3 py-2 text-xs font-medium text-center lg:text-lg"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden animate-fade-down animate-once animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "bg-custom-red text-white block rounded-md px-3 py-2 text-base font-medium"
                      : "text-gray-300 hover:bg-custom-red block rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
