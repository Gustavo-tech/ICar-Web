import { useState, useContext } from 'react'
import { UIContext } from './UIContext'
import { createContext, ReactNode } from 'react'
import { Interaction } from '../models/interaction'
import { getUserInteractions, getMessagesWithUser } from '../api/messages/get'
import { Message } from '../models/message'

type MessageContextProps = {
  // states
  userInteractions: Interaction[];
  messages: Message[];

  // set states
  setUserInteractions: (interactions: Interaction[]) => void;
  setMessages: (messages: Message[]) => void;

  // api calls
  fetchUserInteractions: (token: string) => void;
  fetchMessagesWithUser: (withUserId: string, token: string) => void;
}

export const MessageContext = createContext({} as MessageContextProps)

type MessageProviderProps = {
  children: ReactNode;
}

export const MessageContextProvider = ({ children }: MessageProviderProps) => {

  const { setIsLoading } = useContext(UIContext)

  const [userInteractions, setUserInteractions] = useState<Interaction[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  function fetchUserInteractions(token: string): void {
    setIsLoading(true)
    getUserInteractions(token)
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

  return (
    <MessageContext.Provider value={{
      // states
      userInteractions,
      messages,

      // set states
      setUserInteractions,
      setMessages,

      // api calls
      fetchUserInteractions,
      fetchMessagesWithUser
    }}>
      {children}
    </MessageContext.Provider>
  )
}
