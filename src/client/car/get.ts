import axios from 'axios'
import { apiUrl } from '../../constants/constants'

export function getUserCars(authToken: string, userEmail: string,
  callbackFunction: (response: any) => any): void {
  axios.get(`${apiUrl}/cars/${userEmail}`, {
    headers: {
      'Authorization': authToken,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.status === 200) {
        callbackFunction(response)
      }
    })
}
