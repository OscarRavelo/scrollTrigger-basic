import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
const FakeHorizontal = () => {

  gsap.registerPlugin(ScrollTrigger)

const panels = gsap.utils.toArray("section")
console.log(panels)

  useGSAP(()=>{
    gsap.to(panels, {
      xPercent: -100 * (panels.length -1 ),
      ease: "none", 
      scrollTrigger: {
        trigger: ".contenedor",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length -1 ),
        end: "+=3500"
      }
    })
  })



  return( <div className=" contenedor overscroll-none h-screen w-[600%]  flex-nowrap">

<div className=" h-full flex  items-center">
      <section className=" bg-gradient-to-br from-indigo-400 to-purple-400 w-1/6 justify-center h-full items-center flex flex-col ">



<h1 className="text-4xl font-bold text-white">Horizontal snapping sections (simple) </h1>
        <p className=" text-2xl text-center">Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".</p>

        <div className="flex-end">test</div>

      </section>

      <section className="h-full w-1/6 bg-gradient-to-br from-red-400 to-green-400 flex justify-center items-center">
<h1 className="text-white text-4xl font-bold>One">One</h1>

      </section>
      <section className="h-full w-1/6 bg-gradient-to-br from-yellow-400 to-orange-400 flex justify-center items-center">
<h1 className="text-white text-4xl font-bold>One">Two</h1>

      </section>

      <section className="h-full w-1/6 bg-gradient-to-br from-gray-400 to-blue-400 flex justify-center items-center">
<h1 className="text-white text-4xl font-bold>One">three</h1>

      </section>
      <section className="h-full w-1/6 bg-gradient-to-br from-sky-300 to-red-300 flex justify-center items-center">
<h1 className="text-white text-4xl font-bold>One">four</h1>

      </section>
      <section className="h-full w-1/6 bg-gradient-to-br from-pink-400 to-yellow-400 flex justify-center items-center">
<h1 className="text-white text-4xl font-bold>One">five</h1>

      </section>




    </div>


  </div>)
};

export default FakeHorizontal;
