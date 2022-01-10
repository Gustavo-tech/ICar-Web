import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'

export function deleteCar(id: string, token: string): Promise<AxiosResponse<any>> {
  return axios.delete(`${apiUrl}/cars/delete/${id}`, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
