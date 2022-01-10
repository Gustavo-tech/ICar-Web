import styled from 'styled-components'
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  grid: {
    marginTop: '2%',
  },
  listIcon: {
    minWidth: '21%'
  },
  talkHeader: {
    backgroundColor: 'white',
    marginLeft: '0.4%',
    border: '1px solid #B5B5B5',
  },
  talkHeaderTitle: {
    fontSize: '3vh',
    marginLeft: '20px'
  },
  carAvatar: {
    marginRight: '20px',
    cursor: 'pointer'
  }
})

export const TalkBody = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
  height: 65vh;
  border: 1px solid #B5B5B5;
  padding: 4% 4% 1% 4%;
  overflow-y: auto;
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

interface MessageContainerProps {
  sent: boolean;
}

export const MessageContainer = styled.div<MessageContainerProps>`
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
