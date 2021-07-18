import styled from 'styled-components';

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 12%;
  box-shadow: 0px 15px 30px -8px rgba(95,97,93,0.62);
  background-color: var(--white);

  & > svg {
    fill: var(--red);
    margin-right: 3%;
    cursor: pointer;
  }
`

export const MenuSpan = styled.span`
  color: var(--red);
  margin-left: 7%;
  font-weight: bold;
  font-size: 23px;
  font-family: 'Satisfy', cursive;
`
