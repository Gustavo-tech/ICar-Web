import axios, { AxiosResponse } from "axios"
import { apiUrl } from '../../constants/urls'

export function updateNewsRequest(id: string, title: string, text: string,
  userEmail: string, token: string): Promise<AxiosResponse<any>> {
  const data = {
    id,
    title,
    text,
    userEmail
  }

  return axios.put(`${apiUrl}/news/update`, data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
