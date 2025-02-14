import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="text-gray-900 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-mincho text-red-700">Bienvenue sur mon Portfolio</h1>
        <p className="text-lg md:text-xl font-sans text-gray-700 mt-4 max-w-2xl">
          Développeur Web passionné par la création d'expériences uniques.
        </p>
        <Link to="/projects" className="mt-6 bg-red-700 hover:bg-[#C4A95E] text-gray-100 font-bold px-6 py-3 rounded-lg shadow-lg transition">
          Voir mes projets
        </Link>
      </section>
    );
  };
  
  export default Hero;
  