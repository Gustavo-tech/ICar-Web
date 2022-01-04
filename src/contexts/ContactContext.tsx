import { createContext, ReactNode, useState, useContext } from 'react'
import { Contact } from '../models/contact'
import { UIContext } from './UIContext'
import { getMyContact } from '../api/contact/get'
import { addContact } from '../api/contact/post'

type ContactContextProps = {
  // states
  contact: Contact;
  userHasContact: boolean;

  // set states
  setContact: (contact: Contact) => void;
  setUserHasContact: (userHasContact: boolean) => void;

  // api calls
  fetchMyContact: (token: string) => void;
  createContact: (token: string) => void;
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
  const [userHasContact, setUserHasContact] = useState<boolean>(false)

  function fetchMyContact(token: string): void {
    setIsLoading(true)
    getMyContact(token)
      .then(response => {
        const { data } = response
        setContact(data)
        setUserHasContact(true)
      })
      .catch(error => {
        console.error(error)
        setUserHasContact(false)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function createContact(token: string): void {
    setIsLoading(true)
    addContact(contact, token)
      .then(response => {
        if (response.status === 200)
          setUserHasContact(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <ContactContext.Provider value={{
      // states
      contact,
      userHasContact,

      // set states
      setContact,
      setUserHasContact,

      // api calls
      fetchMyContact,
      createContact
    }}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactContextProvider
