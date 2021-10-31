import axios from "axios"
import { apiUrl } from "../../constants/constants"
import { LoginResponse, TalkResponse, UserInfoResponse } from "../response-types/account"

export function getUserInfo(token: string, email?: string, callback?: (data: UserInfoResponse) => void): void {
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

export function getLogins(token: string, email: string, callback?: (data: LoginResponse[]) => any): void {
  axios.get<LoginResponse[]>(`${apiUrl}/user/logins/${email}`, {
    headers: {
      "Authorization": 'Bearer ' + token
    }
  })
    .then(response => {
      if (callback)
        callback(response.data)
    })
}

export function getTalks(token: string, email?: string, callback?: (data: TalkResponse[]) => any): void {
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
