import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-red-700 text-white p-4 shadow-md border-b-4 border-[#C4A95E] dark:bg-gray-900 dark:border-gray-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mincho tracking-wide">「身丈さん」</h1>

        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#C4A95E] transition">Accueil</Link></li>
          <li><Link to="/projects" className="hover:text-[#C4A95E] transition">Projets</Link></li>
          <li><Link to="/other-projects" className="hover:text-[#C4A95E] transition">Mes autres projets</Link></li>
          <li><Link to="/contact" className="hover:text-[#C4A95E] transition">Contact</Link></li>
        </ul>

        <button onClick={toggleTheme} className="ml-4 text-2xl">
          {theme === "light" ? <BsMoonStarsFill className="text-gray-200 hover:text-gray-400" /> : <BsSunFill className="text-yellow-500 hover:text-yellow-400" />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
