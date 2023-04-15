import { ProjectCard } from "./ProjectCard";
import { OthersProjects } from "./OthersProjects";

export const ProjectsLayout = () => {
  return (
    <section id="misProyectos" className="u-center">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold">Mis proyectos</h1>
        <span className="text-lg text-[var(--text-secondary)]">
          Algunos de mis proyectos
        </span>
      </div>
      <ProjectCard />
      <OthersProjects />
    </section>
  );
};