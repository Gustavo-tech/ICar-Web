import axios from "axios"
import { apiUrl } from "../../constants/urls"
import { LoginResponse, UserInfoResponse } from "../response-types/account"

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
