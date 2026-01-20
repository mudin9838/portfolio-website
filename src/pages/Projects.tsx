type Project = {
  name: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      name: "AuthPlus.Identity",
      description:
        "A custom authentication and authorization library for .NET, designed to simplify identity management with clean architecture and production-ready defaults.",
      tech: [".NET", "JWT", "Auth", "NuGet"],
      links: [
        { label: "NuGet", url: "https://github.com/mudin9838/AuthPlus.Identity" },
        { label: "GitHub", url: "https://github.com/mudin9838/AuthPlus.Identity" },
      ],
    },
    {
      name: "User Management System",
      description:
        "A Full-stack solution using React and ASP.NET Core Web API.",
      tech: ["React", "Javascript", "Azure"],
      links: [{ label: "Live Demo (Azure)", url: "https://github.com/mudin9838/UserManagement" }],
    },
  ];

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-sm transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>

            <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 text-sm mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
