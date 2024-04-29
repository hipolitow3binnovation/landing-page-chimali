import React from "react";
import contact from "../../../assets/home/contact/bg-contact.webp";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="flex flex-col bg-white md:flex-row h-fit" id="contacto">
      <div className="relative w-full md:w-1/2">
        <div className="absolute top-0 left-0 bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-fill"></div>
        <div className="flex flex-row items-center justify-center h-full">
          <div className="flex flex-col gap-4 mx-12 my-16 lg:mx-24">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl font-semibold tracking-wider text-[#363636] uppercase lg:text-4xl">
                Contáctanos
              </h2>
              <p className="text-[#7B7B7B] text-sm lg:text-lg font-normal font-sans leading-7">
                ¿Tienes alguna pregunta o comentario? Estamos aquí para
                escucharte. Completa el formulario a continuación y nos
                pondremos en contacto contigo lo antes posible. ¡Esperamos saber
                de ti!
              </p>
            </div>
            <Form />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 bg-[url('./assets/pattern-dark.svg')] w-full h-16 bg-repeat-x bg-fill rotate-180 invert"></div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={contact} alt="" className="object-cover w-full h-full" />
      </div>
    </section>
  );
};

export default Contact;
