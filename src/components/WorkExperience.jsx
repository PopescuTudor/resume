import styled from 'styled-components';
import ExperienceCard from './ExperienceCard';
const WorkExperience = () => {
  return (
    <div>
      <Title>Work Experience</Title>
      <ExperienceList>
        <ExperienceCard 
          title="Team leader"
          start="Sep 2018"
          end="May 2021"
          logo="https://scontent.fotp3-4.fna.fbcdn.net/v/t39.30808-6/278983459_388925336576752_7019756674126065263_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PdX3tZQYIV0AX8NmJXo&_nc_ht=scontent.fotp3-4.fna&oh=00_AfDy7wkgbmrIU5pIU4KI_J5h_fVxNsMAs3VkXdiX8boyfA&oe=6536913B"
          companyName="The Emperor FTC"
          location="Dr. Tr. Severin, RO"
          bulletPoints={[
            'Robotics',
            '3D Printing',
            'Fusion360',
            'Mechanical Eng.'
            ]}
          boxShadowColor="#3DC39B"
        />
      </ExperienceList>
      <Title>Projects</Title>
      <ExperienceList>
        <ExperienceCard 
          title="Scala"
          start="1"
          end="2 weeks"
          logo="https://logowik.com/content/uploads/images/scala3486.jpg"
          companyName="PPM Image Editor"
          location=""
          bulletPoints={[
            'image manipulation',
            'edge detection',
            'Sobel operator',
            'Pascal triangles'
            ]}
          boxShadowColor="#928CF8"
        />
        <ExperienceCard 
          title="C"
          start="2"
          end="3 weeks"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH90RvQ11imwrTNF_9BS3AIirBZvDwV0GyA&usqp=CAU"
          companyName="Web client - REST API"
          location=""
          bulletPoints={[
            'access a bookstore',
            'JWT token',
            'cookies',
            'HTTPS'
            ]}
          boxShadowColor="#FE74A6"
        />
        <ExperienceCard 
          title="Python"
          start="5"
          end="7 days"
          logo="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png"
          companyName="Discord music bot"
          location=""
          bulletPoints={[
            'YT download manager',
            'external discord library',
            'scripting'
            ]}
          boxShadowColor="#FE74A6"
        />
      </ExperienceList>
    </div>
  );
};

export default WorkExperience;

const Title = styled.div`
  margin-top: 30px;
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
