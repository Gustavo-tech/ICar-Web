import axios, { AxiosResponse } from "axios"
import { apiUrl } from "../../constants/urls"
import News from '../../models/news'

export const getNews = (token: string): Promise<AxiosResponse<News[]>> =>
  axios.get<News[]>(`${apiUrl}/news/all`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })

export const getMyNews = (token: string): Promise<AxiosResponse<News[]>> =>
  axios.get<News[]>(`${apiUrl}/news/mynews`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })

export const getNewsById = (token: string, id: string): Promise<AxiosResponse<News>> =>
  axios.get<News>(`${apiUrl}/news/${id}`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
