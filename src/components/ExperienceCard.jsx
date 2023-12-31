import styled from 'styled-components';

const ExperienceCard = (props) => {
  return(
    <Container style={{ boxShadow: `15px 15px 0px 0px ${props.boxShadowColor}`}}>
      <SpacedColumn>
        <Title>{props.title}</Title>
        <Period>{props.start} - {props.end}</Period>
      </SpacedColumn>
      <SpacedColumn>
        <Company>
          <CompanyLogo src={props.logo}/>
          <CompanyName>{props.companyName}</CompanyName>
        </Company>
        <Location>{props.location}</Location>
      </SpacedColumn>
      <BulletPoints>
        {props.bulletPoints?.map(point => (
          <Point>{point} </Point>
        ))}
      </BulletPoints>
    </Container>
  );
};

export default ExperienceCard;

const Container = styled.div `
  display: flex;
  width: 300px;
  padding: 31px 24.5px 31px 26px;
  margin-left: -26px;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;
  border: 3px solid #211814;
  background: #FFF;
  
`;

const SpacedColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Period = styled.span`
  color: #595959;
  text-align: right;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const Company = styled.div `
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const CompanyLogo = styled.img `
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const CompanyName = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Location = styled.span`
  color: #000;
  text-align: right;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Point = styled.li`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const BulletPoints = styled.ul`
  columns: 2;
  padding: 0px 0px 0px 20px;
  margin: 0px;
`;