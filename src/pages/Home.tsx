import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I’m Muhdin
          <br />
          <span className="text-zinc-600 dark:text-zinc-400">
            .NET Engineer
          </span>
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          I build scalable backend systems, authentication libraries,
          and modern full-stack applications using .NET, EF Core,
          React, and Azure.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded font-medium"
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/muhdin-mussema-5b46b0208/"
            target="_blank"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded font-medium"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
