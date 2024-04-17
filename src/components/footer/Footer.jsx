import React from "react";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[url('../../assets/home/footer.webp')] relative bg-no-repeat bg-cover w-full">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-8 pt-8 pb-24 md:w-1/2 ">
          <div className="flex justify-center w-full">
            <img src={logo} alt="Logo de la empresa" className="w-20" />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 px-8 md:flex-row">
              <a
                href="mailto:contacto@chimalli.com"
                className="flex items-center gap-2 font-sans text-xs font-medium text-white uppercase"
              >
                <ion-icon name="mail-outline"></ion-icon>
                <span>contacto@chimalli.com</span>
              </a>

              <a
                href="tel:961234008811"
                className="flex items-center gap-2 font-sans text-xs font-medium text-white uppercase"
              >
                <ion-icon name="call-outline"></ion-icon>
                <span>961 234 00 88 11</span>
              </a>
            </div>

            <hr className="w-full border border-white" />

            <div className="flex justify-center gap-6">
              <a href="#" className="text-white">
                <ion-icon name="logo-instagram" size="large"></ion-icon>
              </a>

              <a href="#" className="text-white">
                <ion-icon name="logo-facebook" size="large"></ion-icon>
              </a>

              <a href="#" className="text-white">
                <ion-icon name="logo-youtube" size="large"></ion-icon>
              </a>
            </div>

            <div className="flex flex-col gap-4 font-sans text-xs font-medium text-center text-white uppercase">
              <p>~ OAXACA DE JUÁREZ, OAXACA ~ </p>

              <a href="#" className="text-white">
                POLÍTICA DE PRIVACIDAD
              </a>

              <p>Todos los derechos reservados ©</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
