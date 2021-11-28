import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import CarSearchModel from '../search-models/car'
import { Car } from '../response-types/car'

export const getUserCars = (authToken: string, userEmail: string): Promise<AxiosResponse<Car[]>> =>
  axios.get<Car[]>(`${apiUrl}/cars/${userEmail}`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  })


export const getSellingCars = (authToken: string, search: CarSearchModel): Promise<AxiosResponse<Car[]>> =>
  axios.get<Car[]>(`${apiUrl}/cars/selling`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    params: search
  })

export const getCarWithId = (authToken: string, id: string): Promise<AxiosResponse<Car>> =>
  axios.get<Car>(`${apiUrl}/cars/selling/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  })
