import styled from 'styled-components';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <SkillsList>
        <SkillCard 
          title = "Relevant coursework"  
          description = " Programming Paradigms, Data Structures and Algorithms, Numerical Methods, Object Oriented Programming, Computer Programming and Programming Languages"
        />
        <SkillCard 
          title = "Hard skills"  
          description = " C, Scala, Java, GNU Octave, Python, HTML/CSS/JS, React, Verilog, Haskell; English level C2"
        />
        <SkillCard 
          title = "Soft skills"  
          description = " good interpersonal skills developed while leading a robotics team towards multiple regional and national awards"
        />
        
      </SkillsList>
    </div>
  );
};

const Title = styled.div`
  margin-left: 70px;
  margin-top:30px;
  margin-bottom: 20px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export default Skills;