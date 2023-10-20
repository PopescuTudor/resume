import styled from 'styled-components';
import EducationCard from './EducationCard';
const Education = () => {
  return (
    <div>
      <Title>Education</Title>
      <EducationList>
        <EducationCard
          start = "2017"
          end = "2021"
          name = "Traian National College"
          educationDetails = {[
            "Mathematics",
            "Information Technology",
            "C2 English",
          ]}
        />
        <EducationCard
          start = "2021"
          end = "2025"
          name = "Polytechnic University of Bucharest"
          educationDetails = {[
            "Bachelor of Science in Computer Engineering",
          ]}
        />
      </EducationList>
    </div>
    
  );
};

const Title = styled.div`
  margin-left: 70px;
  margin-top:50px;
  margin-bottom: 30px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;



export default Education;
