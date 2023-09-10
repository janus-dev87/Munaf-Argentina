import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import image from "../images/munafo_logo_270x65v1.png";

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
      className="bg-gray-950/80 md:h-[12vh] lg:h-[14vh]
      md:flex md:items-center  rounded-b-3xl fixed w-full z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 lg:px-8 xl:px-4 ">
            <div className="relative flex h-16 items-center justify-between">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch xl:items-center">
                <div className="flex  items-center">
                  <img
                    className="h-[1.6rem] w-11/12 xl:w-full xl:h-12"
                    src={image}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:block lg:ml-[5vw]">
                  <div className="flex  items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-custom-red text-white"
                            : "text-gray-300 hover:bg-custom-red hover:text-white",
                          "rounded-md px-3 py-2 text-xs font-medium text-center lg:text-lg"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden animate-fade-down animate-once animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-custom-red text-white"
                      : "text-gray-300 hover:bg-custom-red hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}