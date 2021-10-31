import { useContext, useEffect, useState } from 'react'
import { getTalks } from '../../api/account/get'
import { UIContext } from '../../contexts/UIContext'
import AppNavbar from '../../components/Navbar/Navbar'
import TalkSidebar from '../../components/Sidebars/TalkSidebar/TalkSidebar'
import SendIcon from '@material-ui/icons/Send';
import {
  Body,
  DetailsWrapper,
  Message,
  MessageInput,
  MessageInputWrapper,
  NickName,
  TalkBody,
  TalkHeader,
  TalkHeaderTitle,
  TalkWrapper,
  UserPic
} from './styles'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import { TalkResponse } from '../../api/response-types/account'

const Messages = () => {

  const { isLoading, setIsLoading } = useContext(UIContext);
  const { oidcUser } = useReactOidc()
  const { access_token, profile } = oidcUser
  const email = profile.email

  const [talks, setTalks] = useState<TalkResponse[]>([])

  useEffect(() => {
    setIsLoading(true)
    getTalks(access_token, email, (data) => {
      setTalks(data)
    })
  }, [])

  return (
    <>
      <AppNavbar showSearch={false} />
      <Body>
        <TalkSidebar />
        <TalkWrapper>
          <TalkHeader>
            <TalkHeaderTitle>ICar</TalkHeaderTitle>
          </TalkHeader>
          <TalkBody>
            <Message sent={false}>Hello</Message>
            <Message sent={true}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus totam quis eum maxime optio nulla in, dolorem consectetur eveniet.</Message>
            <Message sent={false}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus totam quis eum maxime optio nulla in, dolorem consectetur eveniet.</Message>
            <MessageInputWrapper>
              <MessageInput placeholder="Type your message" />
              <SendIcon />
            </MessageInputWrapper>
          </TalkBody>
        </TalkWrapper>
        <DetailsWrapper>
          <UserPic>GH</UserPic>
          <NickName>Gustavo Henrique</NickName>
        </DetailsWrapper>
      </Body>
    </>
  )
}

export default Messages
