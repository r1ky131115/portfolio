import { SocialsIcons } from "./SocialsIcons";

export const Footer = () => {
  return (
    <section id="footer" className="w-full relative">
      <div className="border-b-2" />
      <div className="u-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl mt-10 font-bold">
            Gracias por la visita! 😊
          </p>
          <p className="mt-10">Recuerda que puedes contactar a través de:</p>
          <ul className="m-5 flex gap-2">
            <SocialsIcons />
          </ul>
        <p className="font-bold text-lg mb-2">
          Hecho con 🙌 Ricardo Aguirre.
        </p>
        </div>
      </div>
    </section>
  );
};
