import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMobile,
  faMobileScreen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function PersonCard(props) {
  return (
    <>
      <div className=" max-w-xs xl:max-w-md  rounded-xl shadow-shadow-custom">
        <div className="mx-auto bg-white  p-5 ">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://picsum.photos/200"
            alt="Profile picture"
          />
          <div>
            <h2 className="text-center text-xl font-semibold mt-3 text-gray-900 xl:text-2xl">
              {props.person.name}
            </h2>
            <p className="text-center text-gray-600 mt-1 text-sm xl:text-base">
              {props.person.job}
            </p>
          </div>
          <div className="mt-3">
            <p className="text-gray-700 text-sm xl:text-base">
              {props.person.bio}
            </p>
          </div>
          <div className="flex flex-col space-y-2 items-center text-sm xl:text-base">
            <div className="flex mt-3 w-full justify-between">
              <a
                href={props.person.twitter}
                className="text-custom-red hover:text-red-800"
              >
                Twitter
              </a>
              <a
                href={props.person.linkedin}
                className="text-custom-red hover:text-red-800"
              >
                LinkedIn
              </a>
              <a
                href={props.person.facebook}
                className="text-custom-red hover:text-red-800"
              >
                Facebook
              </a>
            </div>
            <div className="flex items-center w-full px-5 justify-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-2 text-custom-red"
              />
              <p className="text-gray-900">+{props.person.phone}</p>
            </div>
            <div className="flex items-center w-full px-5 justify-center">
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="mr-2 text-custom-red "
              />
              <p className="text-gray-900">+{props.person.tel}</p>
            </div>
            <div className="flex items-center w-full px-5 justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 text-custom-red"
              />
              <a
                href={`mailto:${props.person.email}`}
                className="cursor-pointer hover:text-custom-red"
              >
                <p className="text-gray-900">{props.person.email}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
