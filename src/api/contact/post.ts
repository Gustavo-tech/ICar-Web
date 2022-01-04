import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls';
import { Contact } from '../../models/contact';

export function addContact(contact: Contact, token: string): Promise<AxiosResponse<any>> {
  return axios.post(`${apiUrl}/contact`, contact, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
