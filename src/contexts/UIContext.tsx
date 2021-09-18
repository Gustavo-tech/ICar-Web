import React, { createContext, ReactNode, useState } from 'react'

interface UIContextInterface {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const UIContext = createContext({} as UIContextInterface)

interface UIContextProps {
  children: ReactNode;
}

const UIProvider = ({ children }: UIContextProps) => {
  const [loading, setIsLoading] = useState<boolean>(false)

  return (
    <UIContext.Provider
      value={{
        isLoading: loading,
        setIsLoading: setIsLoading
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIProvider
