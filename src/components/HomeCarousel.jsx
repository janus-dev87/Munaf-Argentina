import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ButtonHeader from "./ButtonHeader";
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
            className={`absolute top-[40%]  rounded-lg py-2 px-4 ml-2 ${
              currentIndex === 0
                ? "animate-fade-left animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in animate-fill-backwards"
                : ""
            }`}
          >
            <h1
              className="  text-2xl  text-white/95 font-bold
            md:text-4xl
            lg:text-5xl
            xl:text-6xl"
            >
              Oportunidad del Mes
            </h1>
            <h2
              className=" text-lg text-white/75  font-bold
            md:text-2xl
            lg:text-3xl
            xl:text-4xl"
            >
              Porsche Panamera S2010 Impecable
            </h2>
          </div>
        </div>
        <div className="w-screen h-screen flex-[0_0_100%] relative bg-hero-image2 bg-cover bg-center bg-gray-800/50 bg-blend-multiply">
          <div
            className={`absolute top-[40%] rounded-lg py-2 px-4 ml-2 ${
              currentIndex === 1
                ? "animate-fade-down animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in animate-fill-backwards"
                : ""
            }`}
          >
            <h1
              className="  text-2xl  text-white/95  font-bold
            md:text-4xl
            lg:text-5xl
            xl:text-6xl"
            >
              Oportunidad del Mes
            </h1>
            <h2
              className=" text-lg text-white/75  font-bold
            md:text-2xl
            lg:text-3xl
            xl:text-4xl"
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
