import { Stack2, Code, Tools, CodeCircle } from "tabler-icons-react";

const skills = [
  {
    id: 1,
    id_dropdown: "frontend/programming language",
    title: "Frontend/Programming language",
    icon: (
      <Code
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="frontend"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "HTML5",
      },
      {
        id: 2,
        skill: "CSS3",
      },
      {
        id: 3,
        skill: "JavaScript",
      },
      {
        id: 4,
        skill: "C#",
      },
    ],
  },
  {
    id: 2,
    id_dropdown: "backend",
    title: "Backend",
    icon: (
      <CodeCircle
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="backend"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "SQL",
      },
      {
        id: 2,
        skill: "MySQL",
      },
      {
        id: 3,
        skill: "MongoDB",
      },
      {
        id: 4,
        skill: "PL / SQL",
      },
    ],
  },
  {
    id: 3,
    id_dropdown: "frameworks",
    icon: (
      <Stack2
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="testing"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    title: "Frameworks",
    skills: [
      {
        id: 1,
        skill: "ASP.NET",
      },
      {
        id: 2,
        skill: "Entity Framework",
      },
      {
        id: 3,
        skill: "React JS",
      },
      {
        id: 4,
        skill: "Tailwind",
      },
      {
        id: 5,
        skill: "Bootstrap",
      },
    ],
  },
  {
    id: 4,
    id_dropdown: "tools",
    title: "Herramientas",
    icon: (
      <Tools
        className="w-36 h-36 text-[var(--bg-buttons)]"
        id="tools"
        style={{
          WebkitBoxReflect:
            "below 3px linear-gradient(transparent, transparent, transparent, #04060f25)",
        }}
      />
    ),
    skills: [
      {
        id: 1,
        skill: "Git / GitHub",
      },
      {
        id: 2,
        skill: "Networking",
      },
      {
        id: 3,
        skill: "Ciberseguridad",
      },
      {
        id: 4,
        skill: "Virtualización",
      }
    ],
  },
];

export const Skills = () => {
  return (
    <section className="mb-10">
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <h2 className="text-5xl font-bold">Habilidades</h2>
        <span className="text-lg text-[var(--text-secondary)]">
          Mis conocimientos
        </span>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 justify-center" data-aos="fade-left"
     data-aos-duration="3000">
        {skills.map((skill) => (
          <div
            className="w-4/5 flex justify-center flex-col items-center mt-5 m-auto"
            key={skill.id}
          >
            <span className="h-48 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">{skill.icon}</span>
            <p className="text-lg flex gap-2 w-fit flex-wrap justify-center">
              {skill.skills.map((skill) => {
                return (
                  <span
                    className="bg-gray-500 p-2 rounded font-bold text-white"
                    key={skill.id}
                  >
                    {skill.skill}
                  </span>
                );
              })}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
