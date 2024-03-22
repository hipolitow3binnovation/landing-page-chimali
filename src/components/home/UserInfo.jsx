import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [locationInfo, setLocationInfo] = useState({});
  const [browserInfo, setBrowserInfo] = useState({});
  const [formData, setFormData] = useState({
    fecha: '',
    hora: '',
    nombre: '',
    email: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const writeToSheet = async () => {
    // Añadir la fecha y hora actuales al formData
    const now = new Date();
    const fechaActual = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
    const horaActual = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

    const formDataConFechaYHora = {
      ...formData,
      fecha: fechaActual,
      hora: horaActual
    };

    console.log("FORM DATA: ", locationInfo);

    if (Object.keys(locationInfo).length > 0 && Object.keys(browserInfo).length > 0) {
      const userInfo = [
        [
          ...Object.values(formDataConFechaYHora), ...Object.values(locationInfo), ...Object.values(browserInfo)
        ]
      ];

      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}write-to-sheet`, { data: userInfo });
        console.log("DATA RESPONSE::::::: ", response.data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
  };

  useEffect(() => {
    // Obtener información de geolocalización
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setLocationInfo({
          ip: data.ip,
          city: data.city,
          region: data.region,
          region_code: data.region_code,
          country: data.country,
          country_name: data.country_name,
          country_code: data.country_code,
          country_capital: data.country_capital,
          postal: data.postal,
          timezone: data.timezone,
          country_calling_code: data.country_calling_code,
          currency: data.currency,
          currency_name: data.currency_name,
          languages: data.languages,
          org: data.org
        });
      })
      .catch((error) => console.log('Error fetching location information: ', error));

    // Detectar navegador y tipo de dispositivo
    const userAgent = navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? (/Android/i.test(userAgent) ? 'Android' : 'iOS') : 'Desktop';
    let browser = userAgent.match(/(firefox|msie|chrome|safari|trident)/i);
    browser = browser ? browser[0] : 'Other';

    setBrowserInfo({
      navegador: browser,
      tipoDeDispositivo: deviceType,
    });
  }, []);

  return (
    <div className='bg-gray-100 py-10 px-5 md:px-10'>
      <div className="max-w-md mx-auto">
        <div>
          <div className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Contáctanos
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Número de Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <button onClick={() =>{ writeToSheet();}} type="submit" className="button_secondary bg-[#E46157] text-white font-bold py-3 px-5 w-full rounded hover:bg-orange-600 transition-colors">Enviar</button>
      </div>
    </div>
  );
};

export default UserInfo;
