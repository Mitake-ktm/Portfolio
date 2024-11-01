import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo>Kévin Dev</Logo>
      <Menu>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </Nav>
  );
};

export default Header;


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f4f4f9;
`;

const Logo = styled.h1`
  color: #6a0dad;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
`;
