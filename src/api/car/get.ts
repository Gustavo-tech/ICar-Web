import axios from 'axios'
import { apiUrl } from '../../constants/urls'
import CarSearchModel from '../search-models/car'

export const getUserCars = (authToken: string, userEmail: string) =>
  axios.get(`${apiUrl}/cars/${userEmail}`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  })


export const getSellingCars = (authToken: string, search: CarSearchModel) =>
  axios.get(`${apiUrl}/cars/selling`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    params: search
  })

export function getCarWithId(authToken: string, id: number, callback?: any) {
  axios.get(`${apiUrl}/cars/selling/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    if (resp.status === 200) {

      if (callback)
        callback(resp.data)
    }
  })
}
