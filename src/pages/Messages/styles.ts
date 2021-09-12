import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  height: 83.4vh;
  overflow: hidden;
  width: 100%;
  margin-top: 3%;
`

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 53%;
  height: 100%;
`

export const TalkHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: 1px solid #B5B5B5;
  width: 100%;
  height: 13%;
  padding: 0 3%;
`

export const TalkHeaderTitle = styled.h2`
  color: var(--red);
  font-family: 'Satisfy', cursive;
`

export const TalkBody = styled.div`
  background-color: transparent;
  width: 100%;
  height: 87%;
  border: 1px solid #B5B5B5;
  padding: 4%;
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2% 0;
  width: 22%;
  height: 100%;
  background-color: white;
  border: 1px solid #B5B5B5;
`

export const UserPic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35%;
  border-radius: 50%;
  width: 60%;
  margin-bottom: 6%;
`

export const NickName = styled.h3`
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 4vh;
`

interface MessageProps {
  sent: boolean;
}

export const Message = styled.div<MessageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.sent ? 'var(--red)' : 'var(--gray)'};
  justify-self: ${props => props.sent ? 'flex-start' : 'flex-end'};
  margin-bottom: 4%;
  flex-wrap: wrap;
  color: white;
  width: 20%;
  height: 17%;
`
