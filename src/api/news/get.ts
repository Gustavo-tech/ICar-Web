import axios, { AxiosResponse } from "axios"
import { apiUrl } from "../../constants/urls"
import News from '../../models/news'

export const getNews = (token: string): Promise<AxiosResponse<News[]>> =>
  axios.get<News[]>(`${apiUrl}/news/all`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })

export const getMyNews = (token: string, email: string): Promise<AxiosResponse<News[]>> =>
  axios.get<News[]>(apiUrl + 'news/all/' + email, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
