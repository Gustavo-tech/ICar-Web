import { createContext, ReactNode, useContext, useState } from 'react';
import { getSellingCars } from '../api/car/get';
import CarSearchModel from '../api/search-models/car'
import Car from '../models/car';
import { UIContext } from './UIContext';

interface CarContextProps {
  fetchCars: (token: string) => void;
  cars: Car[];
  searchForMaker: (maker: string) => void;
  searchForModel: (model: string) => void;
  searchForMinPrice: (price: number) => void;
  searchForMaxPrice: (price: number) => void;
  searchForMaxKilometers: (km: number) => void;
}

export const CarContext = createContext({} as CarContextProps)

interface CarProviderProps {
  children: ReactNode;
}

const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState<Car[]>([])
  const [search, setSearch] = useState<CarSearchModel>(new CarSearchModel())

  const { setIsLoading } = useContext(UIContext)

  async function fetchCars(token: string) {
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

  function searchForMaker(maker: string) {
    let newSearch: CarSearchModel = search.clone(search)
    newSearch.maker = maker
    setSearch(newSearch)
  }

  function searchForModel(model: string) {
    let newSearch: CarSearchModel = search.clone(search)
    newSearch.model = model
    setSearch(newSearch)
  }

  function searchForMinPrice(price: number) {
    let newSearch: CarSearchModel = search.clone(search)
    newSearch.minPrice = price
    setSearch(newSearch)
  }

  function searchForMaxPrice(price: number) {
    let newSearch: CarSearchModel = search.clone(search)
    newSearch.maxPrice = price
    setSearch(newSearch)
  }

  function searchForMaxKilometers(km: number) {
    let newSearch: CarSearchModel = search.clone(search)
    newSearch.maxKilometers = km
    setSearch(newSearch)
  }

  return (
    <CarContext.Provider value={{
      searchForMaker,
      searchForMaxKilometers,
      searchForMaxPrice,
      searchForMinPrice,
      searchForModel,
      cars,
      fetchCars
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
