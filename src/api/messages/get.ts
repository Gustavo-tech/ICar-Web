import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { Interaction } from '../../models/interaction'
import { Message } from '../../models/message'

export function getUserInteractions(token: string): Promise<AxiosResponse<Interaction[]>> {
  return axios.get<Interaction[]>(`${apiUrl}/interactions`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
  })
}

export function getMessagesWithUser(withUserId: string, token: string): Promise<AxiosResponse<Message[]>> {
  return axios.get<Message[]>(`${apiUrl}/messages/${withUserId}`, {
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
