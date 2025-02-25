import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-5xl md:text-6xl font-mincho text-[var(--accent)]"
      >
        Bienvenue sur mon Portfolio
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-lg md:text-xl font-sans text-gray-700 mt-4 max-w-2xl"
      >
        Développeur Web passionné par la création d'expériences uniques.
      </motion.p>

      <motion.a 
        href="/projects" 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mt-6 bg-[var(--accent)] hover:bg-[var(--hover)] text-white font-bold px-6 py-3 rounded-lg shadow-lg transition"
      >
        Voir mes projets
      </motion.a>
    </motion.section>
  );
};

export default Hero;
