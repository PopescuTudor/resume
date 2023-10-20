import styled from 'styled-components';

const SkillCard = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 310px;
  flex-shrink: 0;
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
  margin-left: 70px;
  padding: 21px 5px 21px 21px;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Description = styled.span`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;

export default SkillCard;