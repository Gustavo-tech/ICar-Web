import {
  createContext,
  ReactNode,
  useContext,
  useState
} from 'react'
import {
  getSellingCars,
  getUserCars,
  getCarWithId,
  getMostSeenMakers,
  getMostSeenCars
} from '../api/car/get'
import { newCar } from '../api/car/input-types'
import { addCar } from '../api/car/post'
import { fetchLocationsApi } from '../api/location/get'
import { UIContext } from './UIContext'
import { updateNumberOfViews } from '../api/car/put'
import { CarOverview } from '../models/car'
import { Contact } from '../models/contact'
import { AddressEn } from '../models/address'

type CarContextProps = {
  // Individual car properties
  id: string;
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
  numberOfViews: number;
  acceptsChange: boolean;
  isArmored: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  pictures: string[];
  address: AddressEn;
  contact: Contact;
  mostSeenMakers: string[];
  mostSeenCars: CarOverview[];

  // search properties
  makerText: string;
  modelText: string;
  minPrice: number;
  maxPrice: number;
  maxKilometers: number;

  // set search properties
  setMakerText: (text: string) => void;
  setModelText: (text: string) => void;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  setMaxKilometers: (value: number) => void;

  // Collections
  cars: CarOverview[];

  // Individual car setters
  setId: (id: string) => void;
  setPlate: (p: string) => void;
  setMaker: (m: string) => void;
  setModel: (m: string) => void;
  setMakeDate: (n: number) => void;
  setMakedDate: (n: number) => void;
  setKilometers: (km: number) => void;
  setPrice: (price: number) => void;
  setExchangeType: (type: 'Manual' | 'Automatic') => void;
  setGasolineType: (gType: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex') => void;
  setNumberOfViews: (value: number) => void;
  setColor: (color: '#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF') => void;
  setMessage: (m: string) => void;
  setAcceptsChange: (value: boolean) => void;
  setIsArmored: (value: boolean) => void;
  setIpvaIsPaid: (value: boolean) => void;
  setIsLicensed: (value: boolean) => void;
  setPictures: (pics: string[]) => void;
  setAddress: (address: AddressEn) => void;
  setContact: (contact: Contact) => void;

  // API calls  
  fetchCars: (token: string) => void;
  fetchCar: (id: string, token: string) => void;
  fetchMyCars: (token: string) => void;
  fetchAddress: (zipCode: string) => void;
  fetchMostSeenCars: (quantity: number, token: string) => void;
  fetchMostSeenMakers: (quantity: number, token: string) => void;
  createCar: (token: string) => void;

  // Context functions
  reset: () => void;
}

export const CarContext = createContext({} as CarContextProps)

type CarProviderProps = {
  children: ReactNode;
}

const CarContextProvider = ({ children }: CarProviderProps) => {
  const [id, setId] = useState<string>('')
  const [cars, setCars] = useState<CarOverview[]>([])
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
  const [numberOfViews, setNumberOfViews] = useState(0)
  const [acceptsChange, setAcceptsChange] = useState<boolean>(false)
  const [isArmored, setIsArmored] = useState<boolean>(false)
  const [ipvaIsPaid, setIpvaIsPaid] = useState<boolean>(false)
  const [isLicensed, setIsLicensed] = useState<boolean>(false)
  const [pictures, setPictures] = useState<string[]>([])
  const [mostSeenMakers, setMostSeenMakers] = useState<string[]>([])
  const [mostSeenCars, setMostSeenCars] = useState<CarOverview[]>([])
  const [address, setAddress] = useState<AddressEn>({
    district: '',
    location: '',
    street: '',
    zipCode: ''
  })
  const [contact, setContact] = useState<Contact>({
    emailAddress: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  })
  const [makerText, setMakerText] = useState<string>('')
  const [modelText, setModelText] = useState<string>('')
  const [minPrice, setMinPrice] = useState<number>(0)
  const [maxPrice, setMaxPrice] = useState<number>(0)
  const [maxKilometers, setMaxKilometers] = useState<number>(0)

  const { setIsLoading, setSuccess } = useContext(UIContext)

  function fetchCars(token: string): void {
    setIsLoading(true)
    getSellingCars(makerText, modelText, minPrice, maxPrice, maxKilometers, token)
      .then(({ data }) => {
        setCars(data)
      })
      .catch(error => {
        console.error(error)
        setCars([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function fetchCar(id: string, token: string,): void {
    setIsLoading(true)
    getCarWithId(token, id)
      .then(({ data }) => {
        setId(data.id)
        setMaker(data.maker)
        setModel(data.model)
        setAcceptsChange(data.acceptsChange)
        setColor(data.color)
        setGasolineType(data.gasolineType)
        setIpvaIsPaid(data.ipvaIsPaid)
        setIsArmored(data.isArmored)
        setIsLicensed(data.isLicensed)
        setKilometers(data.kilometersTraveled)
        setMakeDate(data.makeDate)
        setMakedDate(data.makedDate)
        setMessage(data.message)
        setNumberOfViews(data.numberOfViews)
        setPlate(data.plate)
        setExchangeType(data.typeOfExchange)
        setAddress({
          ...address,
          district: data.address.bairro,
          street: data.address.logradouro,
          location: data.address.localidade,
          zipCode: data.address.cep
        })
        setPictures(data.pictures)
        setContact(data.contact)
        increaseNumberOfViews(data.id, token)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function fetchMyCars(token: string): void {
    setIsLoading(true)
    getUserCars(makerText, modelText, minPrice, maxPrice, maxKilometers, token)
      .then(response => {
        console.log(response)
        const { data } = response
        setCars(data)
      })
      .catch(error => {
        console.error(error)
        setCars([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  async function fetchAddress(code: string | undefined): Promise<void> {
    if (code?.length === 8) {
      const resp = await fetchLocationsApi(code)
      const { data } = resp
      setAddress({
        ...address,
        zipCode: code,
        district: data.bairro,
        street: data.logradouro,
        location: data.localidade
      })
    }
  }

  function createCar(token: string): void {
    setIsLoading(true)
    const car = createCarToPost()
    addCar(token, car)
      .then((response) => {
        if (response.status === 200)
          setSuccess(true)

        else
          setSuccess(false)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function increaseNumberOfViews(carId: string, token: string): void {
    updateNumberOfViews(carId, token)
      .catch(error => {
        console.error(error)
      })
  }

  function fetchMostSeenCars(quantity: number, token: string): void {
    setIsLoading(true)
    getMostSeenCars(quantity, token)
      .then(response => {
        const { data } = response
        setMostSeenCars(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function fetchMostSeenMakers(quantity: number, token: string): void {
    setIsLoading(true)
    getMostSeenMakers(quantity, token)
      .then(response => {
        const { data } = response
        setMostSeenMakers(data)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function createCarToPost(): newCar {
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
      address: address,
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
    setAddress({
      district: '',
      location: '',
      street: '',
      zipCode: ''
    })
    setMakerText('')
    setModelText('')
    setMinPrice(0)
    setMaxPrice(0)
    setMaxKilometers(0)
  }

  return (
    <CarContext.Provider value={{
      // states
      id,
      cars,
      maker,
      model,
      plate,
      makeDate,
      makedDate,
      kilometers,
      price,
      exchangeType,
      numberOfViews,
      gasolineType,
      color,
      message,
      acceptsChange,
      ipvaIsPaid,
      isLicensed,
      isArmored,
      pictures,
      address,
      contact,
      mostSeenCars,
      mostSeenMakers,

      // search properties
      makerText,
      modelText,
      minPrice,
      maxPrice,
      maxKilometers,

      // set search properties
      setMakerText,
      setModelText,
      setMinPrice,
      setMaxPrice,
      setMaxKilometers,

      // set states
      setId,
      setMaker,
      setModel,
      setMakeDate,
      setMakedDate,
      setKilometers,
      setPrice,
      setExchangeType,
      setNumberOfViews,
      setGasolineType,
      setColor,
      setMessage,
      setAcceptsChange,
      setIpvaIsPaid,
      setIsLicensed,
      setIsArmored,
      setPlate,
      setPictures,
      setAddress,
      setContact,

      // api calls
      fetchCars,
      fetchMyCars,
      fetchAddress,
      fetchCar,
      fetchMostSeenCars,
      fetchMostSeenMakers,
      createCar,

      // context functions
      reset
    }}>
      {children}
    </CarContext.Provider>
  )
}

export default CarContextProvider
