import { useState, useContext } from 'react'
import { UIContext } from './UIContext'
import { createContext, ReactNode } from 'react'
import { LastMessageWithUser } from '../models/lastMessageWithUser'
import { getLastMessagesWithUsers } from '../api/messages/get'

type MessageContextProps = {
  // states
  lastMessagesWithUsers: LastMessageWithUser[];

  // set states
  setLastMessagesWithUsers: (lastMessagesWithUsers: LastMessageWithUser[]) => void;

  // api calls
  fetchLastMessagesWithUsers: (token: string) => void;
}

export const MessageContext = createContext({} as MessageContextProps)

type MessageProviderProps = {
  children: ReactNode;
}

export const MessageContextProvider = ({ children }: MessageProviderProps) => {

  const { setIsLoading } = useContext(UIContext)

  const [lastMessagesWithUsers, setLastMessagesWithUsers] = useState<LastMessageWithUser[]>([])

  function fetchLastMessagesWithUsers(token: string) {
    setIsLoading(true)
    getLastMessagesWithUsers(token)
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
      lastMessagesWithUsers,

      // set states
      setLastMessagesWithUsers,

      // api calls
      fetchLastMessagesWithUsers
    }}>
      {children}
    </MessageContext.Provider>
  )
}
