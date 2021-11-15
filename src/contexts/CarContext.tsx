import { createContext, ReactNode, useContext, useState } from 'react';
import { getSellingCars, getUserCars } from '../api/car/get';
import CarSearchModel from '../api/search-models/car';
import Car from '../models/car';
import { UIContext } from './UIContext';

type CarContextProps = {
  cars: Car[];
  plate: string | undefined;
  maker: string | undefined;
  model: string | undefined;
  makeDate: number | undefined;
  makedDate: number | undefined;
  kilometers: number | undefined;
  pictures: string[];

  setPlate: (p: string | undefined) => void;
  setMaker: (m: string | undefined) => void;
  setModel: (m: string | undefined) => void;
  setMakeDate: (n: number | undefined) => void;
  setMakedDate: (n: number | undefined) => void;
  setKilometers: (km: number | undefined) => void;
  setPictures: (pics: string[]) => void;
  fetchCars: (token: string) => void;
  fetchMyCars: (token: string, email: string) => void;
  searchForMaker: (maker: string) => void;
  searchForModel: (model: string) => void;
  searchForMinPrice: (price: number) => void;
  searchForMaxPrice: (price: number) => void;
  searchForMaxKilometers: (km: number) => void;
}

export const CarContext = createContext({} as CarContextProps)

type CarProviderProps = {
  children: ReactNode;
}

const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState<Car[]>([])
  const [maker, setMaker] = useState<string | undefined>(undefined)
  const [model, setModel] = useState<string | undefined>('')
  const [plate, setPlate] = useState<string | undefined>('')
  const [makeDate, setMakeDate] = useState<number | undefined>(undefined)
  const [makedDate, setMakedDate] = useState<number | undefined>(undefined)
  const [kilometers, setKilometers] = useState<number | undefined>(undefined)
  const [pictures, setPictures] = useState<string[]>([])
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

  async function fetchMyCars(token: string, email: string) {
    setIsLoading(true)
    try {
      const resp = await getUserCars(token, email)
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
      cars,
      maker,
      model,
      plate,
      makeDate,
      makedDate,
      kilometers,
      pictures,
      setMaker,
      setModel,
      setMakeDate,
      setMakedDate,
      setKilometers,
      setPlate,
      setPictures,
      searchForMaker,
      searchForMaxKilometers,
      searchForMaxPrice,
      searchForMinPrice,
      searchForModel,
      fetchCars,
      fetchMyCars
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
