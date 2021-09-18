import axios from "axios"
import { apiUrl } from "../../constants/constants"
import { talkResponse, userInfoResponse } from "../response-types/account"

export function getUserInfo(token: string, email?: string, callback?: (data: userInfoResponse) => void): void {
  axios.get(`${apiUrl}/user/info/${email}`, {
    headers: {
      Authorization: token,
    },
  })
    .then(response => {
      if (callback)
        callback(response.data)
    })
}

export function getTalks(token: string, email?: string, callback?: (data: talkResponse[]) => any): void {
  axios.get(`${apiUrl}/user/talks/${email}`, {
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
