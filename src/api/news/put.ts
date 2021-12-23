import axios, { AxiosResponse } from "axios"
import { apiUrl } from '../../constants/urls'

export function updateNewsRequest(id: string, title: string, text: string,
  token: string): Promise<AxiosResponse<any>> {
  const data = {
    id,
    title,
    text
  }

  return axios.put(`${apiUrl}/news/update`, data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
