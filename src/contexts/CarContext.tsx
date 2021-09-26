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
    try {
      const resp = await getSellingCars(token, search)
      const { data } = resp
      setCars(data)
    } catch (e) {
      setCars([])
    }
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
