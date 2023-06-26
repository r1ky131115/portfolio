import { Folder, BrandGithub, Eye } from "tabler-icons-react";

const othersProjects = [
  {
    id: 1,
    proyecto_title: "T",
    proyecto_description:
      "",
    proyecto_url_github: "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
      {
        id: 4,
        tecnologia: "",
      },
    ],
  },
  {
    id: 2,
    proyecto_title: "",
    proyecto_description:
      "",
    proyecto_url_github: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
    ],
  },
  {
    id: 3,
    proyecto_title: "",
    proyecto_description:
      "",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
    ],
  },
  {
    id: 4,
    proyecto_title: "",
    proyecto_description:
      "",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
    ],
  },
  {
    id: 5,
    proyecto_title: "",
    proyecto_description:
      "",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
    ],
  },
  {
    id: 6,
    proyecto_title: "",
    proyecto_description:
      "",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      {
        id: 1,
        tecnologia: "",
      },
      {
        id: 2,
        tecnologia: "",
      },
      {
        id: 3,
        tecnologia: "",
      },
    ],
  },
];

export const OthersProjects = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <h2 className="text-4xl font-bold">Otros proyectos interesantes</h2>
      </div>
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-3 bg">
        {othersProjects.map((project) => (
          <div
            key={project.id}
            className="border mt-5 rounded-lg border-[var(--hover-nav)] shadow-2xl shadow-[var(--nav-shadow)] p-5"
          >
            <div className="flex justify-between items-center">
              <Folder className="w-14 h-14 text-[var(--bg-buttons)]" />
              <div className="flex gap-3">
                <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <BrandGithub className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                </a>
                <a
                  href={project.proyecto_url_web}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="web"
                >
                  <Eye className="h-10 w-10 text-[var(--text-secondary)] hover:scale-125 hover:text-[var(--bg-buttons)] cursor-pointer" />
                </a>
              </div>
            </div>
            <h3 className="text-3xl font-bold mt-4 text-center">
              {project.proyecto_title}
            </h3>
            <p className="text-lg mt-3">{project.proyecto_description}</p>
            <div className="flex flex-row justify-center items-center mt-4 gap-4 font-bold flex-wrap">
              {project.proyecto_tecnologias.map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                >
                  {tecnologia.tecnologia}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
