import { createContext, FormEvent, ReactNode, useState } from 'react';
import { Redirect } from 'react-router';
import axios, { AxiosResponse } from 'axios';

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

  function setUserConfiguration(response: AxiosResponse) {
    setIdentification(response.data.cpf);
    setEmail(response.data.email);
    setRole(response.data.role);
    setToken(response.data.token);
  }

  function setCompanyConfiguration(response: AxiosResponse) {
    setIdentification(response.data.cnpj);
    setEmail(response.data.email);
    setRole(response.data.role);
    setToken(response.data.token);
  }

  function login(e: FormEvent, email: string, password: string, isCompany: boolean = false): void {
    e.preventDefault();
    const url: string = isCompany ? 'company' : 'user'
    axios.post(`https://localhost:5001/auth/authenticate/${url}`, {
      email: email,
      password: password
    }, {
      headers: { 'Content-type': 'application/json' }
    })
      .then(response => {
        if (response.status === 200) {
          if (isCompany)
            setCompanyConfiguration(response)
          else
            setUserConfiguration(response)
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
