import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React",
    "Angular",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = [
    "ASP.NET Core",
    "C#",
    "REST API",
    "SQL Server",
    "Microservices",
    "AWS",
    "ASP.NET MVC",
    "LINQ",
    "Entity Framework Core",
    "Docker",
    "PowerBI",
    "GraphQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-black to-black bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-black mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-black font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black text-white-500 py-1 px-3 rounded-full text-sm hover:bg-black 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-black font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black text-white-500 py-1 px-3 rounded-full text-sm hover:hover:bg-black 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-black font-bold mb-4">
                {" "}
                🏫 Education{" "}
              </h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>
                  <strong> M.S. in Computer Science </strong> - Nagarjuna
                  University (2010-2013)
                </li>
                <li>
                  <strong> B.S. in Computer Science </strong> - Nagarjuna
                  University (2007-2010)
                </li>
                <li>
                  Relevant Coursework: Computer applications, Web Development,
                  Cloud Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-black font-bold mb-4">
                {" "}
                💼 Work Experience{" "}
              </h3>
              <div className="space-y-4 text-black">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Lead Analyst at CGI (2021 - Present){" "}
                  </h4>
                  <p className="text-sm">
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Specialist Software Engineering at LTI (2020 - 2021){" "}
                  </h4>
                  <p className="text-sm">
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at TechRAQ Info Solutions (2017 - 2020){" "}
                  </h4>
                  <p className="text-sm">
                    Involved in building Backend applications for Marine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
