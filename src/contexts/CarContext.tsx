import { createContext, ReactNode, useContext, useState } from 'react';
import { getSellingCars, getUserCars } from '../api/car/get';
import { newCar } from '../api/car/input-types';
import { addCar } from '../api/car/post';
import { fetchLocationsApi } from '../api/location/get';
import CarSearchModel from '../api/search-models/car';
import Car from '../models/car';
import { UIContext } from './UIContext';

type CarContextProps = {
  // Individual car properties
  plate: string;
  maker: string;
  model: string;
  makeDate: number;
  makedDate: number;
  kilometers: number;
  price: number;
  exchangeType: 'Manual' | 'Automatic';
  gasolineType: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex';
  color: '#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF';
  message: string;
  acceptsChange: boolean;
  isArmored: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  pictures: string[];
  zipCode: string;
  location: string;
  district: string;
  street: string;

  // Collections
  cars: Car[];

  // Indiviaual car setters
  setPlate: (p: string) => void;
  setMaker: (m: string) => void;
  setModel: (m: string) => void;
  setMakeDate: (n: number) => void;
  setMakedDate: (n: number) => void;
  setKilometers: (km: number) => void;
  setPrice: (price: number) => void;
  setExchangeType: (type: 'Manual' | 'Automatic') => void;
  setGasolineType: (gTyoe: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex') => void;
  setColor: (color: '#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF') => void;
  setMessage: (m: string) => void;
  setAcceptsChange: (value: boolean) => void;
  setIsArmored: (value: boolean) => void;
  setIpvaIsPaid: (value: boolean) => void;
  setIsLicensed: (value: boolean) => void;
  setZipCode: (zipCode: string) => void;
  setDistrict: (district: string) => void;
  setLocation: (location: string) => void;
  setStreet: (street: string) => void;
  setPictures: (pics: string[]) => void;

  // API calls  
  fetchCars: (token: string) => void;
  fetchMyCars: (token: string, email: string) => void;
  fetchAddress: (zipCode: string) => void;
  createCar: (email: string, token: string) => Promise<boolean>;

  // Search methods
  searchForMaker: (maker: string) => void;
  searchForModel: (model: string) => void;
  searchForMinPrice: (price: number) => void;
  searchForMaxPrice: (price: number) => void;
  searchForMaxKilometers: (km: number) => void;

  // Context functions
  reset: () => void;
}

export const CarContext = createContext({} as CarContextProps)

type CarProviderProps = {
  children: ReactNode;
}

const CarContextProvider = ({ children }: CarProviderProps) => {
  const [cars, setCars] = useState<Car[]>([])
  const [maker, setMaker] = useState<string>('')
  const [model, setModel] = useState<string>('')
  const [plate, setPlate] = useState<string>('')
  const [makeDate, setMakeDate] = useState<number>(new Date().getFullYear())
  const [makedDate, setMakedDate] = useState<number>(new Date().getFullYear())
  const [kilometers, setKilometers] = useState<number>(0)
  const [price, setPrice] = useState<number>(1000)
  const [exchangeType, setExchangeType] = useState<'Manual' | 'Automatic'>('Manual')
  const [gasolineType, setGasolineType] = useState<'Diesel' | 'Gasoline' | 'Eletric' | 'Flex'>('Flex')
  const [color, setColor] = useState<'#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF'>('#FFFFFF')
  const [message, setMessage] = useState<string>('')
  const [acceptsChange, setAcceptsChange] = useState<boolean>(false)
  const [isArmored, setIsArmored] = useState<boolean>(false)
  const [ipvaIsPaid, setIpvaIsPaid] = useState<boolean>(false)
  const [isLicensed, setIsLicensed] = useState<boolean>(false)
  const [pictures, setPictures] = useState<string[]>([])
  const [location, setLocation] = useState<string>('')
  const [district, setDistrict] = useState<string>('')
  const [street, setStreet] = useState<string>('')
  const [zipCode, setZipCode] = useState<string>('')
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

  async function createCar(email: string, token: string): Promise<boolean> {
    setIsLoading(true)
    const car = createCarToPost(email)
    const result = await addCar(token, car)
    setIsLoading(false)

    return result.status === 200
  }

  async function fetchAddress(code: string | undefined): Promise<void> {
    if (code?.length === 8) {
      setZipCode(code)
      const resp = await fetchLocationsApi(code)
      const { data } = resp
      setDistrict(data.bairro)
      setStreet(data.logradouro)
      setLocation(data.localidade)
    }

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

  function createCarToPost(email: string): newCar {
    return {
      plate: plate!,
      maker: maker!,
      model: model!,
      makeDate: makeDate!,
      makedDate: makedDate!,
      kilometersTraveled: kilometers!,
      price: price!,
      acceptsChange,
      isLicensed,
      ipvaIsPaid,
      isArmored,
      message: message!,
      exchangeType: exchangeType!,
      color: color!,
      gasolineType: gasolineType!,
      userEmail: email,
      zipCode: zipCode!,
      location: location!,
      district: district!,
      street: street!,
      pictures
    }
  }

  function reset() {
    setCars([])
    setMaker('')
    setModel('')
    setPlate('')
    setMakeDate(new Date().getFullYear())
    setMakedDate(new Date().getFullYear())
    setKilometers(0)
    setPrice(1000)
    setExchangeType('Manual')
    setGasolineType('Gasoline')
    setColor('#FFFFFF')
    setMessage('')
    setAcceptsChange(false)
    setIsArmored(false)
    setIpvaIsPaid(false)
    setIsLicensed(false)
    setPictures([])
    setLocation('')
    setDistrict('')
    setStreet('')
    setZipCode('')
    setSearch(new CarSearchModel())
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
      price,
      exchangeType,
      gasolineType,
      color,
      message,
      acceptsChange,
      ipvaIsPaid,
      isLicensed,
      isArmored,
      pictures,
      zipCode,
      district,
      location,
      street,
      setMaker,
      setModel,
      setMakeDate,
      setMakedDate,
      setKilometers,
      setPrice,
      setExchangeType,
      setGasolineType,
      setColor,
      setMessage,
      setAcceptsChange,
      setIpvaIsPaid,
      setIsLicensed,
      setIsArmored,
      setPlate,
      setPictures,
      setZipCode,
      setDistrict,
      setLocation,
      setStreet,
      searchForMaker,
      searchForMaxKilometers,
      searchForMaxPrice,
      searchForMinPrice,
      searchForModel,
      fetchCars,
      fetchMyCars,
      createCar,
      reset,
      fetchAddress
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
