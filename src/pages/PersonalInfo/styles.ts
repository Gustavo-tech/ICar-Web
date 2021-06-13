import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';

export const Page = styled.div`
  margin-top: 3%;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 100%;
  width: 100%;
  height: 100%;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderInfo = styled.h3`
  text-align: center;
  color: var(--red);
`

export const PageDescription = styled.span`
  text-align: center;
  display: block;
  font-size: 18px;
`

export const InfoListGroup = styled(ListGroup)`
  margin-top: 2%;
  width: 80%;
  padding: 2%;
`
