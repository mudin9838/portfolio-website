import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <Header />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="flex-1 max-w-6xl w-full mx-auto px-6 py-10"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
