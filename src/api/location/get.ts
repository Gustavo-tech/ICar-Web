import axios from 'axios'
import { LocationReponse } from '../response-types/location'

export function fetchLocationsApi(zipCode: string) {
  return axios.get<LocationReponse>(`https://viacep.com.br/ws/${zipCode}/json/`)
}
