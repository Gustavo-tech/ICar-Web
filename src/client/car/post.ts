import axios from 'axios';
import { apiUrl } from '../../constants/constants';

interface newCar {
  pictures: string[];
  plate: string;
  maker: string;
  model: string;
  makeDate: Number;
  makedDate: Number;
  price: Number;
  kilometersTraveled: Number;
  acceptsChange: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  isArmored: boolean;
  message: string;
  color: string;
  exchangeType: string;
  gasolineType: string;
  city: string;
  userEmail: string;
}

export function addCar(authToken: string, data: newCar, callback?: (result: any) => any): void {
  axios.post(`${apiUrl}/car/create`, data, {
    headers: {
      "Authorization": 'Bearer ' + authToken,
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 200) {
        if (callback) {
          callback(response)
        }
      }
    })
}
