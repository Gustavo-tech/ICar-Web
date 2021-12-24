import axios from 'axios'
import { apiUrl } from '../../constants/urls'
import { Talk } from '../../models/talk'

export function getTalks(token: string, callback?: (data: Talk[]) => any): void {
  axios.get(`${apiUrl}/user/talks/`, {
    headers: {
      Authorization: 'Bearer ' + token
    },
  })
    .then(response => {
      if (callback) {
        callback(response.data)
      }
    })
}
