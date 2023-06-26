import { useRef, useState } from "react";
import { Send } from 'tabler-icons-react';
import { useForm } from "../../hooks/useForm";
import emailjs from '@emailjs/browser';

const contactMeFormFields = {
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
};

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user_name, user_email, message, subject, onInputChange, onResetForm } = useForm(contactMeFormFields);

  const alertSumbitMail = useRef(null);
  const alertErrorMail = useRef(null);
  
  const handleFormSubmit = async (e) => {
    console.log(e.target);  
    e.preventDefault();
    try {
      setIsLoading(true);
      emailjs.sendForm('service_pzvmlpv', 'template_eume7c4', e.target, 'q5Mr77Ake23XtZvx1')
        .then(( result ) => {
          if (result.status === 200) {
            console.log(result);
            alertSumbitMail.current.classList.remove("hidden");
            setTimeout(() => {
              alertSumbitMail.current.classList.add("hidden");
            }, 3000);
          }
        });
    } catch ( error ) {
      alertErrorMail.current.classList.remove("hidden");
      setTimeout(() => {
        alertErrorMail.current.classList.add("hidden");
      }, 3000);
    }
    onResetForm();
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleFormSubmit} id="myForm" className="w-3/5 md:mr-10">
      <h3 className="text-2xl mt-10 font-bold">Formulario de contacto</h3>
      <input
        type="text"
        placeholder="Nombre"
        name="user_name"
        value={user_name}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        name="user_email"
        value={user_email}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <input
        type="text"
        placeholder="Asunto"
        name="subject"
        value={subject}
        onChange={onInputChange}
        required
        className="border mt-2 p-2 bg-transparent w-full rounded-md"
      />
      <textarea
        placeholder="Mensaje"
        rows="5"
        name="message"
        value={message}
        onChange={onInputChange}
        required
        className="border rounded-md bg-transparent mt-2 p-2 w-full "
      />

      <div className="bg-[var(--bg-buttons)] rounded-md text-white h-16 hover:scale-105 mt-2 flex items-center justify-center w-full">
        <button
          type="submit"
          disabled={!!isLoading}
          className="text-2xl w-full h-full"
        >
          {isLoading ? (
            <div className="flex justify-center items-center ">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Enviando...
            </div>
          ) : (
            <div className="flex justify-center items-center gap-2 w-full h-full">
              <Send className="h-6 w-6" />
              Enviar
            </div>
          )}
        </button>
      </div>

      <div className="flex flex-col gap-2 justify-center items-end mt-2">
        <div
          className="hidden text-center bg-green-600 w-full p-2 rounded-md mb-6"
          role="alert"
          ref={alertSumbitMail}
        >
          <strong>¡Mensaje enviado!</strong>
          <br />
          Te responderé lo antes posible.
        </div>
        <div
          className="hidden text-center bg-red-500 w-full p-2 rounded-md mb-6"
          role="alert"
          ref={alertErrorMail}
        >
          <strong>¡El mensaje no se pudo enviar!</strong>
          <br />
          Por favor, intenta nuevamente más tarde.
        </div>
      </div>
    </form>
  );
};
