import React, { Children, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ButtonHeader from "./ButtonHeader";
import images from "../images";
import image from "../images/auto-2179220-1920.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
  const autoPlayOptions = {
    delay: 6000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoPlayOptions),
  ]);
  const [index, setIndex] = useState();
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const slideChange = () => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", slideChange);
      return () => emblaApi.off("select", slideChange);
    }
  }, [emblaApi]);
  console.log(currentIndex);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex ">
        <div className="w-screen flex-[0_0_100%]  h-screen relative bg-hero-image bg-cover bg-center bg-gray-800/50 bg-blend-multiply">
          <div
            className={`absolute top-[40%] bg-gray-950/80 rounded-lg py-2 px-4 ml-2 ${
              currentIndex === 0
                ? "animate-fade-left animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in animate-fill-backwards"
                : ""
            }`}
          >
            <h1
              className="  text-2xl  text-white/95 
            md:text-3xl
            lg:text-4xl
            xl:text-5xl"
            >
              Oportunidad del Mes
            </h1>
            <h2
              className=" text-lg text-white/75 
            md:text-xl
            lg:text-2xl
            xl:text-3xl"
            >
              Porsche Panamera S2010 Impecable
            </h2>
          </div>
        </div>
        <div className="w-screen h-screen flex-[0_0_100%] relative bg-hero-image2 bg-cover bg-center bg-gray-800/50 bg-blend-multiply">
          <div
            className={`absolute top-[40%] bg-gray-950/80 rounded-lg py-2 px-4 ml-2 ${
              currentIndex === 1
                ? "animate-fade-down animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in animate-fill-backwards"
                : ""
            }`}
          >
            <h1
              className="  text-2xl  text-white/95 
            md:text-3xl
            lg:text-4xl
            xl:text-5xl"
            >
              Oportunidad del Mes
            </h1>
            <h2
              className=" text-lg text-white/75 
            md:text-xl
            lg:text-2xl
            xl:text-3xl"
            >
              Porsche Panamera S2010 Impecable
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute top-[70%] left-5 z-10">
        <ButtonHeader
          name={
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ color: "#ffffff" }}
              className="lg:h-5"
            />
          }
          onclick={scrollPrev}
        />
      </div>
      <div className="absolute top-[70%] right-5 z-10">
        <ButtonHeader
          name={
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#ffffff" }}
              className="lg:h-5"
            />
          }
          onclick={scrollNext}
        />
      </div>
    </div>
  );
}
