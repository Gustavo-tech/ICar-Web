import styled from 'styled-components'

export const Sidebar = styled.div`
  display: flex;
  background-color: var(--red);
  flex-direction: column;
  padding: 2% 1%;
  width: 25%;
  height: 100%;
`

export const NameInput = styled.input`
  width: 100%;
  height: 10%;
  padding-left: 4%;
  border-radius: 4px;
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 10%;
`

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 13%;
  transition-duration: 0.5s;
  cursor: pointer;
  padding: 2%;
  &:hover {
    background-color: #A01A08;
  }
`

export const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`

export const NameInCircle = styled.div`
  height: 100%;
  width: 80%;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NameWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
`

export const Name = styled.span`
  text-align: left;
  color: var(--white);
  font-family: 'Fira Sans', sans-serif;
  line-height: 30px;
`

export const LastMessage = styled.span`
  text-align: left;
  color: var(--white);
  font-family: 'Fira Sans', sans-serif;
  font-size: 12px;
`
