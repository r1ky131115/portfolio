import { BrandGithub, World } from "tabler-icons-react";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "The Simpsons App",
    proyecto_description:
      "Permite buscar citas de los personajes de la serie, también permite ver los detalles de cada personaje de la familia Simpson y ver algunas noticias relacionadas a la serie.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/ctd-esp-front/tree/main/ctd-esp-fe2-final",
    proyecto_url_web: "https://the-simpson-app.vercel.app/",
    proyecto_tecnologias: [
      "ReactJS",
      "TypeScript",
      "Styled Components",
      "Redux",
      "Jest",
    ],
  },
  {
    id: 2,
    proyecto_title: "Rick and Morty App",
    proyecto_description:
      "Permite buscar personajes de la serie, ver sus detalles y ver episodios relacionados a cada personaje, además de poder agregarlos a favoritos.",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/ctd-esp-front/tree/main/ctd-esp-fe1-final",
    proyecto_url_web: "https://rick-and-morty-taupe-two.vercel.app/",
    proyecto_tecnologias: ["ReactJS", "Redux", "TypeScript", "JSDoc"],
  },
  {
    id: 3,
    proyecto_title: "Github Issues",
    proyecto_description:
      "Permite seguir el estado de los issues de un repositorio de Github, además de poder filtrarlos por estado. Se utilizó React Query para manejar el estado de la aplicación. ",
    proyecto_url_github:
      "https://github.com/gianlucadonofrio/react-query/tree/main/02-react-query-issues",
    proyecto_url_web: "https://react-query-beta.vercel.app/",
    proyecto_tecnologias: ["ReactJS", "React Query", "TypeScript"],
  },
];

export const ProjectCard = () => {
  return (
    <section>
      {projectsInfo.map((project) => (
        <div
          key={project.id}
          className="flex flex-col items-center mt-10 justify-center border-2 rounded-lg shadow-lg md:flex-row-reverse md:border-none md:shadow-none md:relative md:h-96 border-[var(--hover-nav)] "
        >
          <img
            src={`/images/project-${project.id}.webp`}
            alt={project.proyecto_title}
            className="rounded-t md:w-3/5 w-auto md:h-96 object-cover md:absolute md:right-0 md:rounded"
            width={1000}
            height={1000}
          />
          <div className="flex flex-col items-center mt-2 md:absolute md:left-0 md:w-full md:items-start last:border-red-500 ">
            <h1 className="text-3xl font-bold text-center md:w-2/5 md:text-4xl md:text-start">
              {project.proyecto_title}
            </h1>
            <p className="text-start p-4 md:bg-[var(--bg-buttons)] md:rounded-lg md:text-lg md:w-1/2 md:mt-3 font-bold md:text-white md:shadow-xl md:shadow-[var(--nav-shadow)]">
              {project.proyecto_description}
            </p>
            <ul className="flex flex-wrap gap-2 p-4 justify-start mt-3 md:justify-center md:w-2/5 md:mt-3">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <li
                  key={tecnologia}
                  className="bg-gray-500 p-1 rounded font-bold text-white text-sm"
                >
                  {tecnologia}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-5 md:justify-end md:w-2/5 md:mt-3 md:pr-5 mb-5 md:mb-0">
              <a
                href={project.proyecto_url_github}
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <BrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
              <a
                href={project.proyecto_url_web}
                target="_blank"
                rel="noreferrer"
                aria-label="web"
              >
                <World className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
