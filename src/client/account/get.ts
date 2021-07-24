import axios from "axios"
import { apiUrl } from "../../constants/constants"

interface userInfoResponse {
  email: string
  cpf: string
  accountCreationDate: string
  userName: string
}

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
