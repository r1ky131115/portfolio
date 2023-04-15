import { Click, School, Briefcase } from "tabler-icons-react";
import { Skills } from "./Skills";
import { useState } from "react";
import { TimeLine } from "./TimeLine";

export const AboutMe = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [activeEducation, setActiveEducation] = useState(true);
  const [activeWork, setActiveWork] = useState(false);


  return (
    <section className="u-center w-full relative" id="sobreMi">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Sobre mí</h1>
        <span className="text-lg text-[var(--text-secondary)]">
          Quién soy
        </span>
      </div>
      <div  data-aos="fade-right" data-aos-delay="50"
          data-aos-duration="1500">
        <p className="mt-5 text-xl text-center">
          <span className="font-bold">Software Developer,</span> apasionado principalmente por
          el desarrollo Backend ♥️.<br /> Puedes ver algunos de
          mis proyectos en la sección de{" "}
          <a className="font-bold inline-flex" href="#misProyectos">
            proyectos.
            <Click />
          </a>
          <br />
          Soy una persona autodidacta, responsable y comprometida con mi
          trabajo. Constantemente estoy aprendiendo nuevas tecnologías y
          herramientas para mejorar mis habilidades.
          <br />
          Si tiene alguna pregunta o algun comentario no dude en{" "}
          <a className="font-bold inline-flex" href="#contactame">
            contactarme.
            <Click />
          </a>
        </p>
        <Skills />
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold">Mi trayectoria.</h1>
            <span className="text-lg text-[var(--text-secondary)]">
              Educación y trabajo
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-10 gap-5">
            <button
              onClick={() => {
                setShowEducation(true);
                setActiveEducation(true);
                setActiveWork(false);
              }}
              className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${
                activeEducation ? "border-b-2 border-[var(--bg-buttons)]" : ""
              }`}
            >
              <School className="h-10 w-10" />
              Educación <Click />
            </button>
            <button
              onClick={() => {
                setShowEducation(false);
                setActiveEducation(false);
                setActiveWork(true);
              }}
              className={`flex gap-2 font-bold text-lg md:text-2xl items-center hover:text-[var(--bg-buttons)] w-fit justify-center ${
                activeWork ? "border-b-2 border-[var(--bg-buttons)]" : ""
              }`}
            >
              <Briefcase className="h-10 w-10" />
              Trabajo
              <Click />
            </button>
          </div>
          <TimeLine showEducation={showEducation} />
        </div>
      </div>
    </section>
  );
};
