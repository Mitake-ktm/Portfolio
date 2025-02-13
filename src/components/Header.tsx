import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-indigo-900 text-gray-100 p-4'>
      <h1 className="text-xl font-bold">「身丈さん」</h1>
      <ul className='flex justify-center space-x-6'>
        <li>
          <Link to="/" className='hover:text-purple-400 transition'>Accueil</Link>
        </li>
        <li>
          <Link to="/projects" className='hover:text-purple-600 transition'>Projets</Link>
        </li>
        <li>
          <Link to="/other-projects" className='hover:text-purple-600 transition'>Mes autres projets</Link>
        </li>
        <li>
          <Link to="/contact" className='hover:text-purple-600 transition'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;