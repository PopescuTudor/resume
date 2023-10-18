import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';
const WorkExperience = () => {
  return (
    <div>
      <Title>Work experience</Title>
      <ExperienceList>
        <ExperienceCard 
          title="Intern"
          start="Jul 2018"
          end="Oct 2018"
          logo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="The Emperor FTC"
          location="Dr. Tr. Severin, RO"
          bulletPoints={[
            '3D Printing',
            'Cura',
            'Fusion360',
            'Mechanical Eng.'
            ]}
        />
        <ExperienceCard 
          title="Developer"
          start="Jan 2020"
          end="Feb 2022"
          logo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="Adobe"
          location="Bucharest, RO"
          bulletPoints={[
            'C++',
            'Object Oriented Programming',
            'Teamwork',
            'Design lead'
            ]}
        />
        <ExperienceCard 
          title="Engineer"
          start="Jun 2022"
          end="Present"
          logo="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          companyName="Blueprint"
          location="Timisoara, RO"
          bulletPoints={[
            'Scala',
            'Object Oriented Programming',
            'Java',
            'Tech lead'
            ]}
        />
      </ExperienceList>
    </div>
  );
};

export default WorkExperience;

const Title = styled.div`
  margin-left: 50px;
  margin-bottom: 23px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
