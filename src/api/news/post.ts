import axios from 'axios'
import { apiUrl } from '../../constants/urls'

export function createNews(token: string, userEmail: string, title: string, text: string) {
  const data = {
    title,
    text,
    userEmail
  }

  return axios.post(`${apiUrl}/news/create`, data, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
}
