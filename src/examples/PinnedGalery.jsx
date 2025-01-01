import barbaro from "../assets/barbaro.png";
import barbaro2 from "../assets/barbaro2.png";
import medusa from "../assets/medusa.png";
import lich from "../assets/lich.png";
import vampire from "../assets/dracula.png";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function PinnedGalery() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".main",
      {
        scale: 10,
      },
      {
        scale: 1,
        duration: 5,
        scrollTrigger: {
          scrub: true,
        },
      },
    );
  });

  return (
    <div className="w-full h-lvh ">
      <h1 className=" top-auto z-50  font-bold text-white fixed">
        Scroll down to see a photo gallery being relvealed
      </h1>
      <div className="w-full h-lvh relative ">
        <div className="top-0 left-0 z-10 w-[70vw] h-[60vh] absolute ">
          <div className=" z-10  top-[21vw] left-[23vh] w-full min-h-full absolute will-change-transform  origin-center">
            <div
              style={{ backgroundImage: `url(${barbaro})` }}
              className="main z-20  bg-cover bg-gray-50 w-[15vw] h-[15vh]  bg-center "
            ></div>
          </div>
          <div className="top-0 left-[32vh] w-full min-h-full absolute will-change-transform  origin-center">
            <div
              style={{ backgroundImage: `url(${lich})` }}
              className="bg-cover bg-gray-50 w-40 h-32  bg-center "
            ></div>
          </div>
          <div className="top-[25vw] left-0 w-full min-h-full absolute will-change-transform  origin-center">
            <div
              style={{ backgroundImage: `url(${barbaro2})` }}
              className="bg-cover bg-gray-50 w-40 h-32  bg-center "
            ></div>
          </div>
          <div className="top-[37.5vw] left-[37.5vh] w-full min-h-full absolute will-change-transform  origin-center">
            <div
              style={{ backgroundImage: `url(${medusa})` }}
              className="bg-cover bg-gray-50 w-40 h-32  bg-center "
            ></div>
          </div>
          <div className="top-[20vw] left-[50vh] w-full min-h-full absolute will-change-transform  origin-center">
            <div
              style={{ backgroundImage: `url(${vampire})` }}
              className="bg-cover bg-gray-50 w-40 h-32  bg-center "
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
