import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  grid: {
    marginTop: '2%',
  },
  listIcon: {
    minWidth: '21%'
  }
})

export const TalkHeaderTitle = styled.h2`
  color: var(--red);
  font-family: 'Satisfy', cursive;
  background-color: white;
  border: 1px solid #B5B5B5;
  margin: 0;
  padding: 0.5% 4%;
`

export const TalkBody = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  height: 87%;
  border: 1px solid #B5B5B5;
  padding: 4% 4% 1% 4%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 17%;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 100%;
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
  align-self: ${props => props.sent ? 'flex-end' : 'flex-start'};;
  margin-bottom: 4%;
  flex-wrap: wrap;
  color: white;
  min-width: 20%;
  max-width: 48%;
  padding: 2%;
  min-height: 14%;
`

export const NickName = styled.h3`
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-size: 4vh;
`
