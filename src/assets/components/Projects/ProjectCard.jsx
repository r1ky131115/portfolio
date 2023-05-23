import { BrandGithub, Eye } from "tabler-icons-react";

const projectsInfo = [
  {
    id: 1,
    proyecto_title: "Login & Register",
    estilo: "flex-row",
    proyecto_description:
      "Permite buscar citas de los personajes de la serie, también permite ver los detalles de cada personaje de la familia Simpson y ver algunas noticias relacionadas a la serie.",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      "ASP.NET",
      "Bootstrap",
      "Entity Framework",
    ],
  },
  {
    id: 2,
    proyecto_title: "Rick and Morty App",
    estilo: "flex-row-reverse",
    proyecto_description:
      "Permite buscar personajes de la serie, ver sus detalles y ver episodios relacionados a cada personaje, además de poder agregarlos a favoritos.",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: ["ReactJS", "Redux", "TypeScript", "JSDoc"],
  },
  {
    id: 3,
    proyecto_title: "Github Issues",
    estilo: "flex-row",
    proyecto_description:
      "Permite seguir el estado de los issues de un repositorio de Github, además de poder filtrarlos por estado. Se utilizó React Query para manejar el estado de la aplicación. ",
    proyecto_url_github:
      "",
    proyecto_url_web: "",
    proyecto_tecnologias: ["ReactJS", "React Query", "TypeScript"],
  },
];

export const ProjectCard = () => {
  return (
    <section className="min-h-screen w-full relative">
      {projectsInfo.map((project) => (
        <div 
        key={project.id} 
        className={`flex ${project.estilo}  mt-20 items-center justify-center border-[var(--hover-nav)] md:relative bg`}>
      
        <div className="bg rounded-md shadow-lg">
          <div className={`md:flex ${project.estilo} px-4 leading-none`}>
            <div className="flex-none">
             <img
              src={`images/project_${project.id}.webp`}
              alt={`${project.proyecto_title}`}
              className="h-96 w-72 rounded-md shadow-2xl -translate-y-4 md:transform-none border-4 border-gray-300"
            />           
            </div>
  
            <div className="flex-col">
     
              <h3 className="pt-4 text-3xl font-bold text-center">{project.proyecto_title}</h3>
              <hr className="hr-text" data-content=""/>
              <div className="text-md min-w-full md:text-center flex flex-wrap justify-start px-4 my-2">
                {project.proyecto_tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="mr-1.5 mt-0.5 font-bold text-sm bg-[var(--bg-buttons)] text-white rounded-lg px-3 py-1"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
              <p className="hidden md:block px-4 my-4 text-lg text-left">
                {project.proyecto_description}
              </p>
              
              <p className="flex text-md px-4 my-2">
                Rating: 9.0/10 
                <span className="font-bold px-2">|</span>
                Mood: Dark
              </p>
              
              <div className="text-xs">
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
                
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
                
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
              </div>
            
            </div>
          </div>
          <div className={`flex ${project.estilo} justify-between items-center px-4 mb-4 w-full`}>
            <div className="flex">
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
                  <Eye className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </a>
            </div>
            <div className="flex">
              <i className="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
              <i className="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
              <i className="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
              <i className="material-icons ml-2 text-yellow-600">star_outline</i>
              <i className="material-icons ml-2 text-yellow-600">star_half</i>
              <i className="material-icons ml-2 text-yellow-600">star</i>           
              
            </div>
          </div>          
        </div>
      </div>
      ))}
    </section>
  );
};
