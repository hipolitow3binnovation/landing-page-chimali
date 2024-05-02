import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import moment from "moment";

const Form = () => {
  const [locationInfo, setLocationInfo] = useState({});
  const [browserInfo, setBrowserInfo] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del Formulario");
    console.log(data);

    const now = moment();
    const fechaActual = now.format("DD-MM-YYYY");
    const horaActual = now.format("HH:mm");

    const dataConFechaYHora = {
      fecha: fechaActual,
      hora: horaActual,
      ...data,
    };

    writeToSheet(dataConFechaYHora);
    reset();
    setFormSubmitted(true);
    setFeedbackMessage("¡Tus datos han sido enviados correctamente 🍷!");
    setShowMessage(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFeedbackMessage("");
      setShowMessage(false);
    }, 5000);
  };

  const writeToSheet = async (dataConFechaYHora) => {
    console.log("Datos del FormData en writeToSheet");
    console.log(dataConFechaYHora);

    if (
      Object.keys(locationInfo).length > 0 &&
      Object.keys(browserInfo).length > 0
    ) {
      const userInfo = [
        [
          ...Object.values(dataConFechaYHora),
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
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {formSubmitted && (
        <div className="border border-[#623D21] bg-[#623D21]/10 px-4 py-3 text-[#623D21] text-sm font-light text-center shadow animate-message_feedback">
          {feedbackMessage}
        </div>
      )}
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Escribe tu nombre"
          {...register("name", {
            required: {
              value: true,
              message: "Ingresa tu nombre",
            },
            pattern: {
              value: /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ-]{1,30}$/i,
              message:
                "El nombre no puede tener números ni carácteres especiales",
            },
            maxLength: {
              value: 30,
              message: "El nombre no puede tener más de 30 carácteres",
            },
          })}
        />
        <p>
          {errors.name && (
            <span className="text-xs text-red-700">{errors.name.message}</span>
          )}
        </p>
      </div>

      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Escribe tu correo electrónico"
          {...register("email", {
            required: {
              value: true,
              message: "Ingresa tu correo electrónico",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|icloud)\.(com|es)$/i,
              message: "Correo electrónico con formato incorrecto",
            },
          })}
        />
        <p>
          {errors.email && (
            <span className="text-xs text-red-700">{errors.email.message}</span>
          )}
        </p>
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          placeholder="Escribe tu mensaje"
          rows="8"
          {...register("message", {
            required: {
              value: true,
              message: "Redacta tu mensaje",
            },
            maxLength: {
              value: 600,
              message: "El mensaje no puede tener más de 600 carácteres",
            },
          })}
        />
        <p>
          {errors.message && (
            <span className="text-xs text-red-700">
              {errors.message.message}
            </span>
          )}
        </p>
      </div>

      <div>
        <button
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
