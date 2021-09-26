import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/constants'
import Car from '../../models/car'
import CarSearchModel from '../search-models/car'

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

export const getSellingCars = (authToken: string, search: CarSearchModel) =>
  axios.get(`${apiUrl}/cars/selling`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    params: search
  })
