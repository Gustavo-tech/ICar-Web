import { useReactOidc } from '@axa-fr/react-oidc-context';
import { AxiosResponse } from 'axios';
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
  plate: string | undefined;
  maker: string | undefined;
  model: string | undefined;
  makeDate: number | undefined;
  makedDate: number | undefined;
  kilometers: number | undefined;
  price: number | undefined;
  exchangeType: 'Manual' | 'Automatic' | undefined;
  gasolineType: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex' | undefined;
  color: 'Black' | 'White' | 'Red' | 'Orange' | 'Yellow' | 'Dark Green' | 'Light Green' | 'Cyan' | 'Blue' | 'Dark Blue' | 'Purple' | 'Pink' | undefined;
  message: string | undefined;
  acceptsChange: boolean;
  isArmored: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  pictures: string[];
  zipCode: string | undefined;
  location: string | undefined;
  district: string | undefined;
  street: string | undefined;

  // Collections
  cars: Car[];

  // Indiviaual car setters
  setPlate: (p: string | undefined) => void;
  setMaker: (m: string | undefined) => void;
  setModel: (m: string | undefined) => void;
  setMakeDate: (n: number | undefined) => void;
  setMakedDate: (n: number | undefined) => void;
  setKilometers: (km: number | undefined) => void;
  setPrice: (price: number | undefined) => void;
  setExchangeType: (type: 'Manual' | 'Automatic' | undefined) => void;
  setGasolineType: (gTyoe: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex' | undefined) => void;
  setColor: (color: 'Black' | 'White' | 'Red' | 'Orange' | 'Yellow' | 'Dark Green' | 'Light Green' | 'Cyan' | 'Blue' | 'Dark Blue' | 'Purple' | 'Pink' | undefined) => void;
  setMessage: (m: string | undefined) => void;
  setAcceptsChange: (value: boolean) => void;
  setIsArmored: (value: boolean) => void;
  setIpvaIsPaid: (value: boolean) => void;
  setIsLicensed: (value: boolean) => void;
  setZipCode: (zipCode: string | undefined) => void;
  setDistrict: (district: string | undefined) => void;
  setLocation: (location: string | undefined) => void;
  setStreet: (street: string | undefined) => void;
  setPictures: (pics: string[]) => void;

  // API calls  
  fetchCars: (token: string) => void;
  fetchMyCars: (token: string, email: string) => void;
  fetchAddress: (zipCode: string | undefined) => void;
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
  const [maker, setMaker] = useState<string | undefined>(undefined)
  const [model, setModel] = useState<string | undefined>('')
  const [plate, setPlate] = useState<string | undefined>('')
  const [makeDate, setMakeDate] = useState<number | undefined>(undefined)
  const [makedDate, setMakedDate] = useState<number | undefined>(undefined)
  const [kilometers, setKilometers] = useState<number | undefined>(undefined)
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [exchangeType, setExchangeType] = useState<'Manual' | 'Automatic' | undefined>(undefined)
  const [gasolineType, setGasolineType] = useState<'Diesel' | 'Gasoline' | 'Eletric' | 'Flex' | undefined>(undefined)
  const [color, setColor] = useState<'Black' | 'White' | 'Red' | 'Orange' | 'Yellow' | 'Dark Green' | 'Light Green' | 'Cyan' | 'Blue' | 'Dark Blue' | 'Purple' | 'Pink' | undefined>(undefined)
  const [message, setMessage] = useState<string | undefined>(undefined)
  const [acceptsChange, setAcceptsChange] = useState<boolean>(false)
  const [isArmored, setIsArmored] = useState<boolean>(false)
  const [ipvaIsPaid, setIpvaIsPaid] = useState<boolean>(false)
  const [isLicensed, setIsLicensed] = useState<boolean>(false)
  const [pictures, setPictures] = useState<string[]>([])
  const [location, setLocation] = useState<string | undefined>('')
  const [district, setDistrict] = useState<string | undefined>('')
  const [street, setStreet] = useState<string | undefined>('')
  const [zipCode, setZipCode] = useState<string | undefined>('')
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
    console.log(result)

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
    setMaker(undefined)
    setModel('')
    setPlate('')
    setMakeDate(undefined)
    setMakedDate(undefined)
    setKilometers(undefined)
    setPrice(undefined)
    setExchangeType(undefined)
    setGasolineType(undefined)
    setColor(undefined)
    setMessage(undefined)
    setAcceptsChange(false)
    setIsArmored(false)
    setIpvaIsPaid(false)
    setIsLicensed(false)
    setPictures([])
    setLocation(undefined)
    setDistrict(undefined)
    setStreet(undefined)
    setZipCode(undefined)
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
