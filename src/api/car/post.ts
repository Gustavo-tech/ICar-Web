import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { newCar } from './input-types'

export function addCar(authToken: string, data: newCar): Promise<AxiosResponse> {
  return axios.post(`${apiUrl}/cars/create`, data, {
    headers: {
      "Authorization": 'Bearer ' + authToken,
      "Content-Type": "application/json"
    }
  })
}
