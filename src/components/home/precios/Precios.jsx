import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { precios } from '../../../constants/home/precios/precios';

gsap.registerPlugin(ScrollTrigger);

const Precios = () => {
//   useEffect(() => {
//     // You can replace this with any GSAP premium plugin usage
//     gsap.from('.price-card', {
//       duration: 0.5,
//       opacity: 0,
//       y: 50,
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger:'.container',
//         markers:true
//       },
//     });
//   }, []);

  return (
    <div className="bg-gray-100 py-10 px-5 md:px-10 container_precios">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Planes de precios</h2>
      <p className="text-lg text-center text-gray-600 mb-10 font-medium">
        Cultiva tu futuro financiero con Cocoa Token: donde cada inversión es una semilla para el éxito.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Repeat this block for each pricing card */}
        {precios.map((plan, index) => (
          <a target='_blank' href="https://api.whatsapp.com/send?phone=5215642037983&text=Hola,%20%C2%BFMe%20puedes%20brindar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20COCOATOKEN?%20Visite%20la%20p%C3%A1gina%20http://cocoatoken.io/">
            <div key={index} className="bg-white price-card rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 relative">
              <div className='p-6'>
                <h3 className="text-2xl text-[#ED9C4E] uppercase">{plan.title}</h3>
                <p className="text-5xl font-bold text-gray-900 mt-2">
                  {plan.cost}
                </p>
              </div>
              <ul className="text-left mt-6 bg-gray-200 p-6">
                <li className="mb-3 font-medium">{plan.size}</li>
                <li className="mb-3 font-medium">{plan.hitch} de enganche</li>
              </ul>
              <div className='w-10 h-10 rounded-full py-3 bg-[#002F7A] text-white absolute -top-3 -right-3 text-center text-xs font-semibold'>
                MSI
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Precios;
