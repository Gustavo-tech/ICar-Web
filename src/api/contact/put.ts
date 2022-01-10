import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls';

export function updateContact(phoneNumber: string, token: string): Promise<AxiosResponse<any>> {
  const data = {
    phoneNumber
  }

  return axios.put(`${apiUrl}/contact`, data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
