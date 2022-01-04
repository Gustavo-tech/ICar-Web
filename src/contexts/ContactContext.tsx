import { createContext, ReactNode, useState, useContext } from 'react'
import { Contact } from '../models/contact'
import { UIContext } from './UIContext'
import { getMyContact } from '../api/contact/get'

type ContactContextProps = {
  // states
  contact: Contact;

  // set states
  setContact: (contact: Contact) => void;

  // api calls
  fetchMyContact: (token: string) => void;
}

export const ContactContext = createContext({} as ContactContextProps)

type ContactContextProviderProps = {
  children: ReactNode;
}

const ContactContextProvider = ({ children }: ContactContextProviderProps) => {

  const { setIsLoading } = useContext(UIContext)

  const [contact, setContact] = useState<Contact>({
    emailAddress: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  })

  function fetchMyContact(token: string): void {
    setIsLoading(true)
    getMyContact(token)
      .then(response => {
        const { data } = response
        setContact(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <ContactContext.Provider value={{
      // states
      contact,

      // set states
      setContact,

      // api calls
      fetchMyContact
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
