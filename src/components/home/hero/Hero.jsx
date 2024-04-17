import React from "react";
import bg_hero from "../../../assets/home/hero/bg-hero.webp";

const Hero = () => {
  return (
    <>
      <section className="relative h-screen">
        <img
          src={bg_hero}
          alt="dos botellas de Mezcal Chimali inclinadas hacia la izquierda. En el fondo se ven ondas de agua, simulando un efecto de splash. Sobre las botellas hay gotas de agua salpicadas. En la esquina inferior izquierda se observan pencas de maguey sobresaliendo."
          className="absolute inset-0 object-cover w-full h-full bg-no-repeat bg-cover"
        />
        <div className="relative flex items-center justify-center h-full">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col w-full gap-4 lg:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#391F0F] font-serif font-semibold tracking-wider">
                Mezcal Chimali,
                <br className="hidden lg:block" />
                el sabor ancestral de{" "}
                <span className="text-[#956851]">Oaxaca</span>
              </h1>
              <div className="flex flex-col w-full gap-4 lg:gap-5 lg:w-3/4">
                <p className="text-[#888888] text-base sm:text-lg font-light font-sans">
                  Descubre el auténtico sabor de Oaxaca con nuestra selección
                  artesanal de mezcales. Sumérgete en la riqueza de nuestra
                  cultura y tradición con cada sorbo.
                </p>
                <div>
                  <button className="border border-[#623D21] bg-[#956851] uppercase text-white font-sans text-sm sm:text-base font-semibold py-2 px-4 lg:py-3 lg:px-6">
                    Explora Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
