import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'
import { CarOverview, Car } from '../../models/car'

export const getUserCars = (maker: string | undefined, model: string | undefined, minPrice: number | undefined,
  maxPrice: number | undefined, maxKilometers: number | undefined, authToken: string): Promise<AxiosResponse<CarOverview[]>> =>
  axios.get<CarOverview[]>(`${apiUrl}/cars/mycars`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    params: {
      maker,
      model,
      minPrice,
      maxPrice,
      maxKilometers
    }
  })

export const getSellingCars = (maker: string | undefined, model: string | undefined, minPrice: number | undefined,
  maxPrice: number | undefined, maxKilometers: number | undefined, authToken: string): Promise<AxiosResponse<CarOverview[]>> =>
  axios.get<CarOverview[]>(`${apiUrl}/cars/selling`, {
    headers: {
      'Authorization': 'Bearer ' + authToken,
      'Content-Type': 'application/json'
    },
    params: {
      maker,
      model,
      minPrice,
      maxPrice,
      maxKilometers
    }
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
