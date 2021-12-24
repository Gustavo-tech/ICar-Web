import { createContext, ReactNode } from 'react'

type MessageContextProps = {

}

export const MessageContext = createContext({} as MessageContextProps)

type MessageProviderProps = {
  children: ReactNode;
}

export const MessageProvider = ({ children }: MessageProviderProps) => {
  return (
    <MessageContext.Provider value={{

    }}>
      {children}
    </MessageContext.Provider>
  )
}
