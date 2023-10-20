import styled from 'styled-components';

const EducationCard = (props) => {
    return (
      <Container>
        <Period>{props.start} - {props.end}</Period>
        <InstitutionName>{props.name}</InstitutionName>
        <EducationDetails>
          {props.educationDetails?.map(detail => (
            <Detail>{detail} </Detail>
          ))}
        </EducationDetails>
      </Container>
      
    );
}

export default EducationCard;

const Container = styled.div`
  display: inline-flex;
  padding: 21px 40px 22px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  margin-right: 80px;
  margin-left: 70px;
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
`;
const Period = styled.span `
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

const InstitutionName = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
const Detail = styled.li`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
const EducationDetails = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 20px;
  margin: 0px;
`;