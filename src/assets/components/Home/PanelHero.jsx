import { useEffect, useState, useRef } from "react";
import { Send, Download } from "tabler-icons-react";
import { SocialsIcons } from "./SocialsIcons";
import profile from "../../images/profile.webp";


export const PanelHero = () => {
  const [scroll, setScroll] = useState(0);
  const socialIconsScroll  = useRef(null);

  const handleScroll = () => {
    window.addEventListener("scroll", (e) => {
      const scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setScroll(scroll);
    });
  };

  const scrollBottom = () => {
    if (document.documentElement.scrollTop > 4300) {
      socialIconsScroll.current?.classList.add("hidden");
    } else {
      socialIconsScroll.current?.classList.remove("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBottom);
    handleScroll();
  }, [scroll]);

  return (
    <section
      id="Home"
      className="u-center h-screen w-full flex items-center justify-center relative hover:ease-in"
    >
      <div className="flex flex-col-reverse justify-center items-center h-full">
        <ul id="socialIcons" ref={socialIconsScroll} className="fixed bottom-0 left-0 flex gap-5 lg:left-10 lg:bottom-10 lg:flex-col lg:gap-3 invisible xl:visible">
          <SocialsIcons />
          <div className="hidden w-2 h-20 mx-auto bg-[var(--socials-buttons)] lg:block" />
        </ul>

        <div className="flex flex-col font-bold text-2xl mt-3 gap-4 w-full items-center justify-center md:flex-row">
          <a
            href="#contactame"
            className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16 w-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
          >
            <Send className="h-6 w-6" />
            Contáctame
          </a>
          <a
            href="https://drive.google.com/file/d/1QLqcUwoDTTEWgWJQ7GJyWfhO-gpvigGI/view?usp=share_link"
            className="bg-[var(--bg-buttons)] text-[var(--text-buttons)] rounded flex items-center gap-2 justify-center h-16 w-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <Download className="h-6 w-6" />
            Descargar CV
          </a>
        </div>
        
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
          <div className="flex flex-col items-center justify-center relative">
            <p className="text-xl  md:text-2xl font-semibold">Hola 👋🏼, soy</p>
            <h1
              className="text-6xl md:text-9xl font-bold flex flex-col items-center animate-gradient"
              style={{
                background: "-webkit-linear-gradient(-45deg,#800080, #00FFFF, #00BFFF, #1E90FF, #4169E1)",
                backgroundSize: "250%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Aguirre
              <span>Ricardo.</span>
            </h1>
            <p className="text-xl p-3 text-center md:text-2xl font-semibold">
              FullStack .NET.
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 ml-auto mr-auto hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img alt="Imagen de perfil" className="w-full h-full object-cover" src={profile}></img>
      </div>
    </section>
  );
};
