import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Intro>Bienvenue ! Je suis Kévin, développeur web passionné.</Intro>
      <Description>Spécialiste en React, TypeScript, et toujours curieux d’apprendre !</Description>
      <Image src="/Kevin.jpg" alt="Kévin" />
      <Button to="/projects">Voir mes projets</Button>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Intro = styled.h1`
  color: #6a0dad;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 150px;
  margin-top: 1rem;
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
