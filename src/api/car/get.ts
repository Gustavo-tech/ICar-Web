import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { CarOverview, Car } from '../../models/car'
import CarSearchModel from '../search-models/car'

export const getUserCars = (authToken: string): Promise<AxiosResponse<CarOverview[]>> =>
  axios.get<CarOverview[]>(`${apiUrl}/cars/mycars`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    }
  })

export const getSellingCars = (authToken: string, search: CarSearchModel): Promise<AxiosResponse<CarOverview[]>> =>
  axios.get<CarOverview[]>(`${apiUrl}/cars/selling`, {
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

export const getMostSeenMakers = (quantity: number, token: string): Promise<AxiosResponse<string[]>> =>
  axios.get<string[]>(`${apiUrl}/cars/mostseen/makers`, {
    headers: {
      "Authorization": "Bearer " + token
    },
    params: {
      quantity
    }
  })

export const getMostSeenCars = (quantity: number, token: string): Promise<AxiosResponse<CarOverview[]>> =>
  axios.get<CarOverview[]>(`${apiUrl}/cars/mostseen/cars`, {
    headers: {
      "Authorization": "Bearer " + token
    },
    params: {
      quantity
    }
  })
