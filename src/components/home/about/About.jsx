import React from "react";
import bg_about from "../../../assets/home/about/bg-about.webp";
import logo from "../../../assets/logo.svg";

const About = () => {
  return (
    <section className="relative h-screen" id="quienes-somos">
      <img
        src={bg_about}
        alt="Fondo de la sección Sobre Nosotros"
        className="absolute inset-0 object-cover w-full h-full bg-no-repeat bg-cover"
      />
      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center justify-center w-full h-screen ml-auto lg:w-1/2">
              <div className="flex flex-col gap-4 p-8 text-white lg:p-14 backdrop-blur-3xl bg-[#261C13]/30">
                <img
                  src={logo}
                  alt="Logotipo de la empresa"
                  className="object-contain w-20 h-auto lg:w-32"
                />
                <h2 className="font-serif text-2xl font-semibold tracking-wider uppercase lg:text-4xl">
                  Nuestra Historia: La Tradición que nos Define
                </h2>
                <div className="flex flex-col gap-3 lg:gap-5">
                  <p className="text-[#C8C8C8] text-sm lg:text-lg font-normal font-sans leading-7">
                    En Mezcal Chimali, nos enorgullece preservar la esencia de
                    la cultura zapoteca en cada botella. Desde tiempos
                    ancestrales, el mezcal ha sido más que una bebida; es un
                    símbolo de identidad, celebración y conexión con nuestra
                    tierra. Descubre cómo nuestra historia se entrelaza con la
                    riqueza de Oaxaca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
