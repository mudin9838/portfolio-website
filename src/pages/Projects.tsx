export default function Projects() {
  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-8">

        {/* AuthPlus.Identity */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-sm transition">
          <h2 className="text-xl font-semibold mb-2">AuthPlus.Identity</h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-3xl">
            A custom authentication and authorization library for .NET,
            designed to simplify identity management with clean architecture
            and production-ready defaults.
          </p>

          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">.NET</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">JWT</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Auth</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">NuGet</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.nuget.org"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              NuGet
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Demo App */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-sm transition">
          <h2 className="text-xl font-semibold mb-2">AuthPlus Demo App</h2>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-3xl">
            A full-stack demo built with React + TypeScript and .NET Web API,
            showcasing AuthPlus.Identity in a real production-style setup,
            deployed on Azure.
          </p>

          <div className="flex flex-wrap gap-3 text-sm mb-4">
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">React</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">TypeScript</span>
            <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">Azure</span>
          </div>

          <a
            href="#"
            className="font-medium underline underline-offset-4"
          >
            Live Demo (Azure)
          </a>
        </div>

      </div>
    </section>
  );
}
