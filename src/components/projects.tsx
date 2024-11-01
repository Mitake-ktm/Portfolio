import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
      <Container>
        <Title>Mes Projets</Title>
        {/*<ProjectList>
          <Project>
            <Image src="project1.jpg" alt="Project 1" />
            <ProjectTitle>Projet Manga Manager</ProjectTitle>
            <Button href="https://github.com/ton-repo" target="_blank">Voir le code</Button>
            <Button href="https://ton-site-en-ligne.com" target="_blank">Démo</Button>
          </Project>*/}
          {/* Ajouter d'autres projets ici */}
        {/*</ProjectList>*/}
      </Container>
    );
  };
  
  export default Projects;
  
  // Styles
  const Container = styled.div`
    padding: 2rem;
  `;
  
  const Title = styled.h2`
    color: #6a0dad;
  `;
  
  const ProjectList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  `;
  
  const Project = styled.div`
    background-color: #f4f4f9;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
  `;
  
  const ProjectTitle = styled.h3`
    margin-top: 1rem;
    color: #6a0dad;
  `;

  const Button = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #ff007f;
  color: white;
  border-radius: 4px;
  margin-top: 1.5rem;
  text-decoration: none;
`;