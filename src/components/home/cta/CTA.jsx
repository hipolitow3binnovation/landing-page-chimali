import React from "react";
import bg_cta from "../../../assets/home/cta/bg-cta.webp";
import lemon from "../../../assets/home/cta/lemon.webp";
import water from "../../../assets/home/cta/water.webp";

const CTA = () => {
  return (
    <section className="relative h-screen">
      <img
        src={bg_cta}
        alt="Fondo de la sección CTA"
        className="absolute object-cover object-center w-full h-full bg-no-repeat bg-cover"
      />
      <div className="flex items-center justify-center h-full">
        <div className="container px-6 mx-auto lg:px-0">
          <div className="lg:flex lg:items-center lg:justify-center">
            <div className="w-full lg:w-1/2 lg:ml-auto px-6 py-24 h-fit relative backdrop-blur-3xl bg-[#261C13]/30">
              <div className="flex flex-col gap-5 px-4 lg:px-14">
                <h2 className="font-serif text-2xl font-semibold tracking-wider text-white uppercase lg:text-4xl">
                  ¡Descubre el sabor auténtico de Oaxaca con Mezcal Chimali!
                </h2>
                <p className="text-[#C8C8C8] text-sm lg:text-lg font-normal font-sans leading-7">
                  Sumérgete en la rica tradición del mezcal artesanal. ¡Explora
                  nuestra colección hoy mismo!
                </p>
                <div>
                  <button className="px-4 py-2 font-sans text-sm font-semibold text-white uppercase bg-transparent border border-white lg:text-base">
                    Explora Ahora
                  </button>
                </div>
              </div>
              <div className="absolute top-0 -left-10 lg:-left-56">
                <img
                  src={lemon}
                  alt="Imagen de un limón"
                  className="w-48 mix-blend-lighten lg:w-96"
                />
              </div>
              <div className="absolute top-0 -left-10 lg:-left-40">
                <img
                  src={water}
                  alt="Imagen de agua"
                  className="w-48 mix-blend-lighten aspect-square lg:h-96 animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
