import axios, { AxiosResponse } from 'axios'
import { apiUrl } from '../../constants/urls'

export function updateNumberOfViews(id: string, token: string): Promise<AxiosResponse<any>> {
  return axios.put(`${apiUrl}/cars/views/${id}`, undefined, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}

type UpdateCarType = {
  id: string;
  kilometersTraveled: number;
  price: number;
  message: string;
  acceptsChange: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  isArmored: boolean;
  zipCode: string;
  location: string;
  district: string;
  street: string;
  pictures: string[];
}

export function updateCar(data: UpdateCarType, token: string): Promise<AxiosResponse<any>> {
  return axios.put(`${apiUrl}/cars/update`, data, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
}
