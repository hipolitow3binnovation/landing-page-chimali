import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quienesSomosImg from "../../../assets/home/quienesSomos/img/quienes_somos_img.png"
import GraphicQuienesSomosUno from './GraphicQuienesSomosUno';
import GraphicQuienesSomosDos from './GraphicQuienesSomosDos';

gsap.registerPlugin(ScrollTrigger);

const QuienesSomos = () => {
    useEffect(() => {
        ScrollTrigger.batch('.animate', {
            onEnter: batch => gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
            onLeave: batch => gsap.set(batch, { opacity: 0, overwrite: true }),
            onEnterBack: batch => gsap.set(batch, { opacity: 1, overwrite: true }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, overwrite: true }),
        });
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#0A1845] to-[#0C1E57] text-white p-8 md:py-40 relative">
            <div className='absolute top-0 left-0'>
                <GraphicQuienesSomosUno />
            </div>
            <div className='absolute bottom-0 right-0'>
                <GraphicQuienesSomosDos />
            </div>
            <div className='relative flex flex-col md:flex-row items-center gap-40 justify-between '>
                <div className="md:w-1/2 animate opacity-0 flex justify-end">
                    <img
                    id='image_quienes_somos'
                        src={quienesSomosImg} // Replace with your image path
                        alt="Descriptive text about the image"
                        className="w-[30rem] h-[30rem] object-cover rounded-lg shadow-2xl"
                    />
                </div>
                <div className="md:w-1/2 animate opacity-0">
                    <div className='max-w-md'>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Desentrañando el Dulce Mundo de las Criptomonedas: Cocoa</h2>
                        <p className="mb-6">
                            En esta entrada, exploraremos cómo Cocoa Token, más que una simple criptomoneda, se convierte en tu socio en el viaje hacia un futuro financiero más sostenible.
                        </p>
                        <button className="button_secondary bg-[#E46157] text-white font-bold py-3 px-5 w-60 rounded hover:bg-orange-600 transition-colors">
                            Saber más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuienesSomos;
