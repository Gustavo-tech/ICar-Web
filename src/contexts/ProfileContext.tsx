import { createContext, FormEvent, ReactNode, useState } from 'react';
import axios from 'axios';

interface ProfileData {
  identification: string;
  email: string;
  role: string;
  token: string;
  login: (e: FormEvent, email: string, password: string) => void;
}

interface ProfileProvider {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileData);

export const ProfileProvider = ({ children }: ProfileProvider) => {
  const [identification, setIdentification] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [token, setToken] = useState('');

  function login(e: FormEvent, email: string, password: string, isCompany: boolean = false): void {
    e.preventDefault();
    const url: string = isCompany ? 'company' : 'user'
    console.log(url)
    axios.post(`https://localhost:5001/auth/authenticate/${url}`, {
      email: email,
      password: password
    }, {
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then(response => {
        if (response.status === 200) {
          setIdentification(response.data.identification);
          setEmail(response.data.email);
          setRole(response.data.role);
          setToken(response.data.token);
        }
      })
  }

  return (
    <ProfileContext.Provider value={{
      identification,
      email,
      role,
      token,
      login
    }}>
      {children}
    </ProfileContext.Provider>
  )
}
