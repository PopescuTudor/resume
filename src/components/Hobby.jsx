import styled from 'styled-components';

const Hobby = () => {
  return (
    <div>
      <Title>Hobbies</Title>
      <Hobbies>Tennis./.. Hiking./.. Skiing./.. Technology./.. Automotive</Hobbies>
    </div>
    
  );
};

const Title = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 18px */
  margin-top: 30px;
  margin-left: 30px;
`;

const Hobbies = styled.div`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 100%;
  margin-top: 15px;
  margin-left: 30px;
`;

export default Hobby;