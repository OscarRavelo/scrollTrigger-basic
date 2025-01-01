import barbaro from "../assets/barbaro.png";
import barbaro2 from "../assets/barbaro2.png";
import medusa from "../assets/medusa.png";
import lich from "../assets/lich.png";
import vampire from "../assets/dracula.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ParallaxBackground = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let containers = gsap.utils.toArray(".bg");

    containers.forEach((container) => {
      gsap.to(container, {
        translateY: -300,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: true,
          snap: 1 / container.length,
          pinSpacing: false,
        },
      });
    });
  });

  return (
    <div className="border border-red-500 relative mb-12">
      <section className="   relative h-lvh flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${barbaro})` }}
          className="bg  absolute top-0 left-0  w-full h-lvh text-white bg-cover bg-center bg-no-repeat"
        ></div>
        <h1 className="text-white drop-shadow-lg z-1 font-light text-5xl ">
          You
        </h1>
      </section>
      <section className="relative h-lvh flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${lich})` }}
          className="bg absolute top-0 left-0  w-full h-lvh text-white bg-cover bg-center bg-no-repeat"
        ></div>
        <h1 className="text-white drop-shadow-lg z-1 font-light text-5xl ">
          Little
        </h1>
      </section>
      <section className="relative h-lvh flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${barbaro2})` }}
          className="bg absolute top-0 left-0  w-full h-lvh text-white bg-cover bg-center bg-no-repeat"
        ></div>
        <h1 className="text-white drop-shadow-lg z-1 font-light text-5xl ">
          Piece
        </h1>
      </section>{" "}
      <section className="relative h-lvh flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${medusa})` }}
          className="bg absolute top-0 left-0  w-full h-lvh text-white bg-cover bg-center bg-no-repeat"
        ></div>
        <h1 className="text-white drop-shadow-lg z-1 font-light text-5xl ">
          of
        </h1>
      </section>{" "}
      <section className="relative h-lvh flex justify-center items-center">
        <div
          style={{ backgroundImage: `url(${vampire})` }}
          className="bg absolute top-0 left-0  w-full h-lvh text-white bg-cover bg-center bg-no-repeat"
        ></div>
        <h1 className="text-white drop-shadow-lg z-1 font-light text-5xl ">
          shit
        </h1>
      </section>
    </div>
  );
};

export default ParallaxBackground;
