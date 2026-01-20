export default function About() {
  return (
    <section className="space-y-8 max-w-3xl">
      <h1 className="text-3xl font-bold">About</h1>

      <p className="text-zinc-600 dark:text-zinc-400">
        I’m a .NET engineer focused on building scalable backend systems,
        authentication solutions, and cleanly structured applications.
        My work emphasizes performance, maintainability, and real-world
        production readiness.
      </p>

      <p className="text-zinc-600 dark:text-zinc-400">
        I’m the creator of <strong>AuthPlus.Identity</strong>, a NuGet package
        designed to simplify authentication and authorization in ASP.NET Core
        applications using clean architecture principles.
      </p>

      <p className="text-zinc-600 dark:text-zinc-400">
        I regularly write about .NET, EF Core performance, and backend
        architecture, sharing practical insights based on real problems
        encountered in production systems.
      </p>

      <p className="text-zinc-600 dark:text-zinc-400">
        My current focus is on building cloud-native applications with
        ASP.NET Core, React, and Azure, while continuously improving system
        design and developer experience.
      </p>
    </section>
  );
}
