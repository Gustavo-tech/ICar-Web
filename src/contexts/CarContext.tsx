import { createContext, ReactNode, useState } from 'react';
import { getSellingCars } from '../api/car/get';
import CarSearchModel from '../api/search-models/car'
import Car from '../models/car';

interface CarContextProps {
  fetchCars: (token: string, search: CarSearchModel) => void;
  cars: Car[];
}

export const CarContext = createContext({} as CarContextProps)

interface CarProviderProps {
  children: ReactNode;
}

const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState<Car[]>([])

  async function fetchCars(token: string, search: CarSearchModel) {
    const resp = await getSellingCars(token, search)
    console.log(resp)
  }

  return (
    <CarContext.Provider value={{
      cars,
      fetchCars
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
