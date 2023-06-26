import { BrandGithub } from "tabler-icons-react";
import imagen1 from '../../assets/project_1.webp';
import imagen2 from '../../assets/project_2.webp';
import imagen3 from '../../assets/project_3.webp';


const projectsInfo = [
  {
    id: 1,
    proyecto_title: "Login & Register",
    estilo: "flex-row",
    proyecto_description:
      "Sitio web que simula el login y registro de usuarios en una aplicación web.",
    proyecto_url_github:
      "https://github.com/r1ky131115/ProyectoLogin",
    proyecto_url_web: "",
    proyecto_tecnologias: [
      "ASP.NET",
      "Bootstrap",
      "Entity Framework",
    ],
    imagePaths: imagen1,
  },
  {
    id: 2,
    proyecto_title: "Lista de tareas pendientes",
    estilo: "flex-row-reverse",
    proyecto_description:
      "Permite crear, editar, eliminar y ver las tareas pendientes de una lista de tareas. Tambien dispone de un modo dark y light para elegir entre ellos.",
    proyecto_url_github:
      "https://github.com/r1ky131115/ListaTareasPendientes",
    proyecto_url_web: "",
    proyecto_tecnologias: ["ASP.NET", "Bootstrap", "Entity Framework"],
    imagePaths: imagen2,
  },
  {
    id: 3,
    proyecto_title: "Agenda",
    estilo: "flex-row",
    proyecto_description:
      "Este es el tan conocido CRUD en forma de agenda el cual permite crear, editar, eliminar y ver los usuarios.",
    proyecto_url_github:
      "https://github.com/r1ky131115/ASP.NET-CRUD-b-sico-",
    proyecto_url_web: "",
    proyecto_tecnologias: ["ASP.NET", "Bootstrap", "SQLServer"],
    imagePaths: imagen3,
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
              src={project.imagePaths}
              alt={`${project.proyecto_title}`}
              className="h-96 w-72 rounded-md shadow-2xl -translate-y-4 md:transform-none border-4 border-gray-300"
            />           
            </div>
            <img src="" alt="" srcset="" />
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
              
              {/* <p className="flex text-md px-4 my-2">
                Rating: 9.0/10 
                <span className="font-bold px-2">|</span>
                Mood: Dark
              </p> */}
              
              <div className="text-xs">
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">RESPONSIVE</button>
                
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">MODE DARK</button>
                
                <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">WEB</button>
              </div>
            
            </div>
          </div>
          <div className={`flex ${project.estilo} justify-between items-center px-4 mb-4 w-full`}>
            <div className="flex mt-1">
              <a
                  href={project.proyecto_url_github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <BrandGithub className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </a>
                {/* <a
                  href={project.proyecto_url_web}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="web"
                >
                  <Eye className="h-10 w-10 hover:scale-125 hover:text-[var(--bg-buttons)]" />
                </a> */}
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
