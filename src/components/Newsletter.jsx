/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faHouse,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-600 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Reciba todas nuestras novedades
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Respetamos su casilla de entrada y por eso nuestro compromiso es
              enviarle sólo las novedades que le interesen.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Ingrese su email"
              />
              <Button name={"Suscríbete"} type={SubmitEvent} />
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Información semanal
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur alias dolorum ut quaerat molestias itaque magnam
                inventore facere, ex ad corporis fugiat distinctio illo
                recusandae? Odio commodi nam eius a?
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">
                Respetamos tu privacidad
              </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                quod sapiente molestiae nihil asperiores. Deleniti repellendus,
                voluptatum aut eius, inventore, debitis quo ipsam consequatur
                alias ullam magni aperiam in fugit.
              </dd>
            </div>
          </dl>
        </div>
        <div
          className="flex flex-col items-start mt-10
          sm:justify-center sm:text-center sm:mx-auto sm:items-center
          lg:text-2xl "
        >
          <dt
            className=" font-semibold text-white text-2xl
            sm:text-center
            lg:text-5xl lg:pb-8"
          >
            Contáctenos
          </dt>
          <dd className="mt-2 leading-7 text-gray-200">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#ffffff" }}
              className="mr-2"
            />
            Av. Del Libertador 14745, Acassuso, Bs. As.
          </dd>
          <dd className="mt-2 leading-7 text-gray-200">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#ffffff" }}
              className="mr-2"
            />
            11 4792 5820
          </dd>
          <dd className="mt-2 leading-7 text-gray-200">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              className="mr-2"
            />
            info@munafoautomoviles.com
          </dd>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
