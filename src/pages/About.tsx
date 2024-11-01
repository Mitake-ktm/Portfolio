import styled from 'styled-components';
const About = () => {
    return (
      <Container>
        <Title>À propos de moi</Title>
        <Text>Je suis un développeur passionné par le web, spécialisé en React et TypeScript. J'aime résoudre des problèmes et créer des expériences uniques.</Text>
        <Skills>
          <Skill>React</Skill>
          <Skill>TypeScript</Skill>
          <Skill>Node.js</Skill>
          <Skill>HTML & CSS</Skill>
        </Skills>
      </Container>
    );
  };
  
  export default About;
  
  // Styles
  const Container = styled.div`
    padding: 2rem;
  `;
  
  const Title = styled.h2`
    color: #6a0dad;
  `;
  
  const Text = styled.p`
    margin-top: 1rem;
    line-height: 1.6;
  `;
  
  const Skills = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
  `;
  
  const Skill = styled.span`
    padding: 0.3rem 0.8rem;
    background-color: #ff007f;
    color: white;
    border-radius: 4px;
  `;
  