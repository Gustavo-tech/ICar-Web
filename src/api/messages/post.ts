import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'

export function startInteraction(subjectId: string, text: string,
  token: string): Promise<AxiosResponse<any>> {
  const data = {
    subjectId,
    text
  }

  return axios.post(`${apiUrl}/interactions/start`, data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
