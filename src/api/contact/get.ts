import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { Contact } from '../../models/contact'

export function getMyContact(token: string): Promise<AxiosResponse<Contact>> {
  return axios.get<Contact>(`${apiUrl}/contact`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
