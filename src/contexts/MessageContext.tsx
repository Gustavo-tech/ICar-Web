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
  fetchMessagesWithUser: (withUserId: string, subjectId: string, token: string) => void;
  addUserInteraction: (subjectId: string, token: string) => void;
  addMessage: (message: Message) => void;
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

  function fetchMessagesWithUser(withUserId: string, subjectId: string, token: string): void {
    setIsLoading(true)
    getMessagesWithUser(withUserId, subjectId, token)
      .then(response => {
        const { data } = response
        const orderedData = sortMessagesByDate(data)
        setMessages(orderedData)
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

  function addMessage(message: Message): void {
    console.log(messages)
    const messagesCopy: Message[] = [...messages, message]
    console.log(messagesCopy)
    const messagesOrdered: Message[] = sortMessagesByDate(messagesCopy)
    console.log(messagesOrdered)
    setMessages(messagesOrdered)
  }

  function getDateField(field: 'year' | 'month' | 'day' | 'hour' | 'minutes' | 'seconds',
    message: Message): number {
    switch (field) {
      case 'year':
        return Number.parseInt(message.sentAt.toString().substring(0, 4))

      case 'month':
        return Number.parseInt(message.sentAt.toString().substring(5, 7))

      case 'day':
        return Number.parseInt(message.sentAt.toString().substring(8, 10))

      case 'hour':
        return Number.parseInt(message.sentAt.toString().substring(11, 13))

      case 'minutes':
        return Number.parseInt(message.sentAt.toString().substring(14, 16))

      case 'seconds':
        return Number.parseInt(message.sentAt.toString().substring(17, 19))

      default:
        return 0
    }
  }

  function getDateWithMessage(x: Message): Date {
    let year = getDateField('year', x)
    let month = getDateField('month', x)
    let day = getDateField('month', x)
    let hour = getDateField('hour', x)
    let minutes = getDateField('minutes', x)
    let seconds = getDateField('seconds', x)

    return new Date(year, month, day, hour, minutes, seconds)
  }

  function sortMessagesByDate(m: Message[]): Message[] {
    return m.sort((x: Message, y: Message) => {
      let xDate = getDateWithMessage(x)
      let yDate = getDateWithMessage(y)

      return xDate.getTime() - yDate.getTime()
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
      addMessage
    }}>
      {children}
    </MessageContext.Provider>
  )
}
