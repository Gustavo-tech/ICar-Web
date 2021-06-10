import { createContext, ReactNode, useState } from 'react';
import axios from 'axios';

interface ProfileData {
  identification: string;
  email: string;
  accountCreationDate: string;
  role: string;
  token: string;
  login: (email: string, password: string) => void;
}

interface ProfileProvider {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileData);

export const ProfileProvider = ({ children, ...rest }: ProfileProvider) => {
  const [identification, setIdentification] = useState('');
  const [email, setEmail] = useState('');
  const [accountCreationDate, setAccountCreationDate] = useState('');
  const [role, setRole] = useState('');
  const [token, setToken] = useState('');

  function login(email: string, password: string, isCompany: boolean = false): void {
    const url: string = isCompany ? 'company' : 'user'
    axios.post(`https://localhost:5001/authenticate/${url}`, {
      email,
      password
    }, {
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
        }
      })
  }

  return (
    <ProfileContext.Provider value={{
      identification,
      email,
      accountCreationDate,
      role,
      token,
      login
    }}>
      {children}
    </ProfileContext.Provider>
  )
}
