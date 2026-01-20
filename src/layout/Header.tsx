import { NavLink } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const linkClass =
  "hover:opacity-70 transition";

const activeClass =
  "font-semibold underline underline-offset-8";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg">Muhdin</span>

        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? activeClass : linkClass}>
            Projects
          </NavLink>
          <NavLink to="/articles" className={({ isActive }) => isActive ? activeClass : linkClass}>
            Articles
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : linkClass}>
            About
          </NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
