import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownMenu(props) {
  const [scrollPosition, setScrollPosition] = useState("");
  const [positionY, setPositionY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setScrollPosition("bottom-0 mb-11 origin-top");
    } else {
      setScrollPosition(" origin-bottom-right");
    }
  };
  console.log(positionY);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuOpen = () => {
    setIsOpen(true);
    handleScroll(); // Actualizar la posición cuando se abre el menú
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  console.log(scrollPosition);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onClose={handleMenuClose}
    >
      <div>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-custom-red px-3 py-2
         text-sm font-semibold text-slate-100 tracking-widest shadow-sm   hover:bg-red-800  lg:text-[16px]
         xl:text-base xl:tracking-wider xl:font-medium"
          onClick={handleMenuOpen}
        >
          {props.options.title}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white font-bold 
            xl:h-6 xl:w-6 "
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/*  <Menu.Items
          className="absolute h-auto max-h-56 overflow-y-auto
        right-0  bottom-0 mb-11 z-10 mt-2 w-auto origin-top rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-3 px-3">
            {props.options.options.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-950 tracking-wider"
                        : "text-gray-950 tracking-wider",
                      "block px-4 py-2 text-sm xl:text-2xl"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item> */}
        <Menu.Items
          className={`${scrollPosition} right-0 absolute h-auto max-h-56 overflow-y-auto z-10 mt-2 w-auto  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <div className="py-3 px-3">
            {props.options.options.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-950 tracking-wider"
                        : "text-gray-950 tracking-wider",
                      "block px-4 py-2 text-sm xl:text-2xl"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
