import axios from 'axios'
import { apiUrl } from '../../constants/constants'
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

export function getCarWithId(authToken: string, id: number, callback?: any) {
  axios.get(`${apiUrl}/cars/selling/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  }).then(resp => {
    if (resp.status === 200) {
      console.log(resp);

      if (callback)
        callback(resp.data)
    }
  })
}
