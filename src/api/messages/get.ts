import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { LastMessageWithUser } from '../../models/lastMessageWithUser'

export function getLastMessagesWithUsers(token: string): Promise<AxiosResponse<LastMessageWithUser[]>> {
  return axios.get<LastMessageWithUser[]>(`${apiUrl}/user/talks/`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
  })
}
