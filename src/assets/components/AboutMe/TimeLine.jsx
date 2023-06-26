import { Calendar } from "tabler-icons-react";

const educationHistory = [
  {
    id: 1,
    title: "Universidad Nacional Arturo Jauretche",
    text: "Ingeniería en Informática",
    date: "Marzo 2019 - Actualidad",
  },
  {
    id: 2,
    title: "Cursos",
    text: "Diferentes cursos en el area de la programación",
    date: "Enero 2019 - Actualidad",
  },
];

const workHistory = [
  {
    id: 1,
    title: "Grupo Datco (Freelancer)",
    text: "Consultor IT",
    date: "Abril 2022 - Actualidad",
  },
  {
    id: 2,
    title: "Arvent Group",
    text: "Desarrollador Web .NET",
    date: "Junio 2022 - Actualidad",
  },
];

export const TimeLine = ({ showEducation }) => {
  return (
    <section className="flex flex-col w-full z-100">
      <ol className="items-center sm:flex flex-col md:flex-row mt-10 ">
        {(showEducation ? educationHistory : workHistory).map((item) => (
          <li
            className="relative mb-6 sm:mb-0 w-full md:h-40 flex flex-col even:items-end even:text-end md:even:items-start md:even:text-start"
            key={item.id}
          >
            <div className="flex items-center md:w-full" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500">
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full ring-0 sm:ring-8 ring-[var(--background)] shrink-0">
                <Calendar className="text-black" />
              </div>
              <div className="hidden w-full h-0.5 bg-[var(--bg-buttons)] md:flex" />
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-[var(--text-secondary)]">
                {item.date}
              </time>
              <p className="text-base font-bold">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
