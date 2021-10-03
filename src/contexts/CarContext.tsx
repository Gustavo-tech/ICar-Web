import { useReactOidc } from '@axa-fr/react-oidc-context';
import { createContext, ReactNode, useContext, useState } from 'react';
import { getSellingCars } from '../api/car/get';
import CarSearchModel from '../api/search-models/car'
import Car from '../models/car';
import { UIContext } from './UIContext';

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

  const { setIsLoading } = useContext(UIContext)

  async function fetchCars(token: string, search: CarSearchModel) {
    setIsLoading(true)
    try {
      const resp = await getSellingCars(token, search)
      const { data } = resp
      setCars(data)
    }
    catch (e) {
      setCars([])
    }
    setIsLoading(false)
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
