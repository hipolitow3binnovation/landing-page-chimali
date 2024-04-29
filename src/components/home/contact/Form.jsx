import React, { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {
  const [locationInfo, setLocationInfo] = useState({});
  const [browserInfo, setBrowserInfo] = useState({});
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const writeToSheet = async () => {
    // Añadir la fecha y hora actuales al formData
    const now = new Date();
    const fechaActual = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getDate().toString().padStart(2, "0")}`;
    const horaActual = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    const formDataConFechaYHora = {
      ...formData,
      fecha: fechaActual,
      hora: horaActual,
    };

    console.log("FORM DATA: ", locationInfo);

    if (
      Object.keys(locationInfo).length > 0 &&
      Object.keys(browserInfo).length > 0
    ) {
      const userInfo = [
        [
          ...Object.values(formDataConFechaYHora),
          ...Object.values(locationInfo),
          ...Object.values(browserInfo),
        ],
      ];

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}write-to-sheet`,
          { data: userInfo }
        );
        console.log("DATA RESPONSE::::::: ", response.data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
  };

  useEffect(() => {
    // Obtener información de geolocalización
    fetch("https://ipapi.co/json/")
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
          org: data.org,
        });
      })
      .catch((error) =>
        console.log("Error fetching location information: ", error)
      );

    // Detectar navegador y tipo de dispositivo
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const deviceType = isMobile
      ? /Android/i.test(userAgent)
        ? "Android"
        : "iOS"
      : "Desktop";
    let browser = userAgent.match(/(firefox|msie|chrome|safari|trident)/i);
    browser = browser ? browser[0] : "Other";

    setBrowserInfo({
      navegador: browser,
      tipoDeDispositivo: deviceType,
    });
  }, []);

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escribe tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Escribe tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje"
          rows="8"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div>
        <button
          onClick={() => {
            writeToSheet();
          }}
          type="submit"
          className="border uppercase border-[#623D21] font-sans font-semibold text-sm text-white bg-[#956851] px-4 py-2 block w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Form;
