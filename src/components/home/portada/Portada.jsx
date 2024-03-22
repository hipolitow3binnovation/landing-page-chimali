import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import portadaImg from "../../../assets/home/portada/img/portadaImg.png"
import GraphicPortada from './GraphicPortada';

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Portada = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Example of GSAP animation with premium plugins
    // gsap.to(containerRef.current, {
    //   duration: 1,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: 'bottom center',
    //     toggleActions: 'play none none reverse',
    //     markers:true,
    //     scrub:1
    //   },
    //   motionPath: {
    //     path: [{ x: 100, y: 0 }, { x: 200, y: 100 }],
    //     align: 'self',
    //     alignOrigin: [0.5, 0.5],
    //   },
    // });
  }, []);

  return (
    <div className="h-[70vh] bg-gradient-to-b from-[#102772] to-[#0A1846] overflow-hidden">
      <div className="h-full flex">
        <div className="md:w-8/12 w-full h-full flex justify-center items-center relative" ref={containerRef}>
          <div className='absolute w-[60rem] h-[60rem] bg-[#1A47B0] rounded-[6rem] rotate-45 opacity-10 -top-1/4 -right-1/2'></div>
          <div className='absolute w-[60rem] h-[60rem] bg-[#1A47B0] rounded-[6rem] rotate-45 opacity-10 -bottom-1/4 -right-1/2'></div>
          <div className='absolute top-0 bottom-0 left-0 w-full h-full'>
            <GraphicPortada />
          </div>
          <div className='relative max-w-96'>
            <h1 className="text-6xl font-bold text-white mb-4">Somos Cocoa</h1>
            <p className="text-6xl text-white mb-4 font-light">Delicia para tu futuro</p>
            <div className="text-white text-base mb-8 cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out">
              Scroll Down to Learn More <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="md:w-4/12 h-full relative">
          <div className='absolute w-full h-full top-0 right-0 bg-gradient-to-tr from-[#835b00] to-[#f4aa00]'></div>
          <img
            src={portadaImg}
            alt="Two women looking at a tablet, engaged in their work with interest. Placeholder image."
            className="w-full h-full object-right object-cover opacity-25 grayscale relative brightness-90 contrast-125"
          />
        </div>
      </div>
    </div>
  );
};

export default Portada;
