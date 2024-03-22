import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bannerImg from "../../../assets/home/banner/img/banner_img.png"
import chevronButonBanner from "../../../assets/home/banner/svg/chevron_button_banner.svg"

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const bannerRef = useRef();

    useEffect(() => {
        gsap.to(bannerRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bannerRef.current,
                start: 'top center',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <div className="relative text-white py-40 px-5" ref={bannerRef}>
            <div className='absolute w-full h-full bg-gradient-to-tr from-[#835b00] to-[#f4aa00] top-0 right-0'></div>
            <div className='absolute w-full h-full top-0 right-0'>
                <img src={bannerImg} className='w-full h-full object-cover opacity-25 grayscale relative brightness-90 contrast-125' alt="" />
            </div>
            <div className='w-full h-full flex justify-center items-center relative'>
                <div className="container mx-auto flex justify-between items-center max-w-3xl">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">Tu inversión</h2>
                        <p className="text-2xl my-3">Respaldada por la dulce promesa del cacao.</p>
                    </div>
                    <button className="button_secondary flex bg-white text-[#E46157] font-bold py-3 px-5 rounded hover:bg-orange-600 transition-colors">
                        <div>
                            Agenda una llamada
                        </div>
                        <div>
                            <img src={chevronButonBanner} className='w-6 h-6 ml-3' alt="" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
