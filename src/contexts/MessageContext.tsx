import { useState, useContext } from 'react'
import { UIContext } from './UIContext'
import { createContext, ReactNode } from 'react'
import { Interaction } from '../models/interaction'
import { getUserInteractions, getMessagesWithUser } from '../api/messages/get'
import { Message } from '../models/message'
import { startInteraction } from '../api/messages/post'

type MessageContextProps = {
  // states
  userInteractions: Interaction[];
  messages: Message[];
  messageText: string;

  // set states
  setUserInteractions: (interactions: Interaction[]) => void;
  setMessages: (messages: Message[]) => void;
  setMessageText: (text: string) => void;

  // api calls
  fetchUserInteractions: (token: string) => void;
  fetchMessagesWithUser: (withUserId: string, token: string) => void;
  addUserInteraction: (subjectId: string, token: string) => void;
}

export const MessageContext = createContext({} as MessageContextProps)

type MessageProviderProps = {
  children: ReactNode;
}

export const MessageContextProvider = ({ children }: MessageProviderProps) => {

  const { setIsLoading } = useContext(UIContext)

  const [userInteractions, setUserInteractions] = useState<Interaction[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [messageText, setMessageText] = useState<string>('')

  function fetchUserInteractions(token: string): void {
    setIsLoading(true)
    getUserInteractions(token)
      .then(response => {
        const { data } = response
        setUserInteractions(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function fetchMessagesWithUser(withUserId: string, token: string): void {
    setIsLoading(true)
    getMessagesWithUser(withUserId, token)
      .then(response => {
        const { data } = response
        setMessages(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function addUserInteraction(subjectId: string, token: string): void {
    startInteraction(subjectId, messageText, token)
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <MessageContext.Provider value={{
      // states
      userInteractions,
      messages,
      messageText,

      // set states
      setUserInteractions,
      setMessages,
      setMessageText,

      // api calls
      fetchUserInteractions,
      fetchMessagesWithUser,
      addUserInteraction,
    }}>
      {children}
    </MessageContext.Provider>
  )
}
