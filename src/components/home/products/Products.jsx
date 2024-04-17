import React from "react";
import { Link } from "react-router-dom";
import hand from "../../../assets/home/products/hand.webp";
import bottle_1 from "../../../assets/home/products/bottle-1.webp";
import bottle_2 from "../../../assets/home/products/bottle-2.webp";
import bottle_3 from "../../../assets/home/products/bottle-3.webp";
import bottle_4 from "../../../assets/home/products/bottle-4.webp";
import bottle_5 from "../../../assets/home/products/bottle-5.webp";

const Products = () => {
  return (
    <section
      className="h-fit bg-[url('./assets/home/products/bg-texture.webp')] relative bg-no-repeat bg-cover"
      id="productos"
    >
      <div className="absolute bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-contain bg-fill"></div>
      <div className="flex flex-col items-center justify-end py-24 pt-6 md:flex-row xl:py-0">
        <div className="container flex flex-col w-full gap-4 px-6 pt-24 mx-auto md:w-5/12 xl:px-0 xl:pt-0">
          <h2 className="font-serif text-2xl font-semibold tracking-wider text-white uppercase lg:text-4xl">
            Explora Nuestra Colección
          </h2>
          <p className="text-[#C8C8C8] text-sm lg:text-lg font-normal font-sans leading-7">
            Sumérgete en el mundo de Mezcal Chimali y descubre una gama diversa
            de mezcales, cada uno elaborado con pasión y dedicación. Desde los
            robustos y ahumados hasta los suaves y florales, hay algo para cada
            paladar. Explora nuestra colección y encuentra tu nuevo favorito.
          </p>
        </div>
        <div className="w-full md:w-5/12">
          <img
            src={hand}
            alt="Imagen de una mano sosteniendo una botella"
            className="w-full h-full md:w-[60-rem] bg-contain object-contain md:h-fit aspect-square"
          />
        </div>
      </div>

      <div className="grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-3 h-fit place-content-start">
        <div className="col-span-1">
          <div className="relative w-full h-full group">
            <img
              src={bottle_1}
              alt="Botella de Mezcal 1"
              className="object-cover w-full h-full bg-cover"
            />
            <div className="absolute flex flex-col items-center justify-center p-8 transition-all duration-300 shadow inset-16 bg-[#261C13]/25 group-hover:backdrop-blur-sm backdrop-brightness-90 group-hover:top-6 group-hover:bottom-6">
              <h3 className="absolute p-8 font-serif text-lg font-semibold tracking-wider text-white uppercase transition-all duration-300 translate-y-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 lg:text-2xl">
                Ámbar Zapoteco
              </h3>
              <p className="absolute p-8 font-serif text-sm font-normal leading-7 text-white transition-all duration-300 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:text-lg">
                Sabor a caramelo con toques de vainilla y ahumado.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:row-start-2">
          <div className="relative w-full h-full group">
            <img
              src={bottle_2}
              alt="Botella de Mezcal 2"
              className="object-cover w-full h-full bg-cover"
            />
            <div className="absolute flex flex-col items-center justify-center p-8 transition-all duration-300 shadow inset-16 bg-[#261C13]/25 group-hover:backdrop-blur-sm backdrop-brightness-90 group-hover:top-6 group-hover:bottom-6">
              <h3 className="absolute p-8 font-serif text-lg font-semibold tracking-wider text-white uppercase transition-all duration-300 translate-y-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 lg:text-2xl">
                Luz de Oaxaca
              </h3>
              <p className="absolute p-8 font-serif text-sm font-normal leading-7 text-white transition-all duration-300 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:text-lg">
                Fresco y cítrico con aroma herbal.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:mt-16 md:col-start-2 md:row-span-2">
          <div className="relative w-full h-full group">
            <img
              src={bottle_3}
              alt="Botella de Mezcal 3"
              className="object-cover w-full h-full bg-cover md:bg-contain md:object-contain aspect-square md:aspect-auto"
            />
            <div className="absolute flex flex-col items-center justify-center p-8 transition-all duration-300 shadow inset-16 bg-[#261C13]/25 group-hover:backdrop-blur-sm backdrop-brightness-90 group-hover:top-6 group-hover:bottom-6">
              <h3 className="absolute p-8 font-serif text-lg font-semibold tracking-wider text-white uppercase transition-all duration-300 translate-y-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 lg:text-2xl">
                Resplandor de la Sierra
              </h3>
              <p className="absolute p-8 font-serif text-sm font-normal leading-7 text-white transition-all duration-300 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:text-lg">
                Notas de madera, caramelo y especias.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:mt-32 md:col-start-3 md:row-start-1">
          <div className="relative w-full h-full group">
            <img
              src={bottle_4}
              alt="Botella de Mezcal 4"
              className="object-cover w-full h-full bg-cover"
            />
            <div className="absolute flex flex-col items-center justify-center p-8 transition-all duration-300 shadow inset-16 bg-[#261C13]/25 group-hover:backdrop-blur-sm backdrop-brightness-90 group-hover:top-6 group-hover:bottom-6">
              <h3 className="absolute p-8 font-serif text-lg font-semibold tracking-wider text-white uppercase transition-all duration-300 translate-y-0 opacity-100 group-hover:opacity-0 group-hover:-translate-y-4 lg:text-2xl">
                Fuego Ancestral
              </h3>
              <p className="absolute p-8 font-serif text-sm font-normal leading-7 text-white transition-all duration-300 -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 lg:text-lg">
                Intenso con toques de cacao y pimienta.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-start-3 md:row-start-2">
          <div className="relative w-full h-full">
            <img
              src={bottle_5}
              alt="Botella de Mezcal 5"
              className="object-cover w-full h-full bg-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center h-full gap-2 p-6 md:gap-4">
              <Link
                to="/"
                className="animate-pulse border border-[#623D21] bg-white uppercase w-fit text-[#623D21] font-sans text-sm font-semibold py-2 px-4 lg:py-3 lg:px-6"
              >
                Explora toda la colección
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
