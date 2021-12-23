import axios from 'axios'
import { apiUrl } from '../../constants/urls'

export function createNews(token: string, title: string, text: string) {
  const data = {
    title,
    text
  }

  return axios.post(`${apiUrl}/news/create`, data, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}
