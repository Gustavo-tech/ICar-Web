import { Address } from './address'
import { Contact } from './contact'

export type CarOverview = {
  id: string;
  maker: string;
  model: string;
  makeDate: number;
  makedDate: number;
  price: number;
  numberOfViews: number;
  kilometersTraveled: number;
  pictures: string[];
  address: Address;
}

export type Car = CarOverview & {
  acceptsChange: boolean;
  color: '#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF';
  gasolineType: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex';
  ipvaIsPaid: boolean;
  isArmored: boolean;
  isLicensed: boolean;
  message: string;
  plate: string;
  typeOfExchange: 'Manual' | 'Automatic';
  contact: Contact;
}
