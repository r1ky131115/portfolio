import { Calendario } from "./Calendario";
import { Form } from "./Form";
import { Mail } from 'tabler-icons-react';


export const ContactMeLayout = () => {
  return (
    <section
      id="contactame"
      className="u-center flex flex-col items-center justify-center md:justify-between relative min-h-screen max-w-6xl mx-auto "
    >

      <div className="w-full justify-center">
        <h2 className="flex flex-col justify-center items-center w-full font-semibold text-xl md:text-2xl ">
          Ahora o nunca!
          <span className="bg-[var(--bg-buttons)] text-4xl font-bold rounded-md p-3 w-fit relative text-white mt-2 md:text-5xl lg:text-6xl">
            Contact&aacute;me.&#160;
            <span className="absolute right-0 w-0 bg-[var(--bg-buttons)] border-l-4 animate-writing">
              &#160;
            </span>
          </span>
        </h2>
        <p className="mt-2 p-2 text-xl md:text-start text-center">
          Si quieres contactarme conmigo, puedes hacerlo a través de las redes
          sociales o llenando el formulario de contacto. Te responderé lo antes
          posible. ¡Gracias! 😊
        </p>
        <a
          href="mailto:ricardoaguirre_96@hotmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="email"
          className="flex gap-2 items-center justify-center md:justify-start text-xl mt-3"
        >
          <Mail className="h-8 w-8" />
          <p className="font-bold">ricardoaguirre_96@hotmail.com</p>
        </a>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <Form />
        <Calendario />
      </div>
    </section>
  );
};
