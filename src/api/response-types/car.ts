type Address = {
  cep: string;
  localidade: string;
  logradouro: string;
  bairro: string;
}

export type Car = {
  id: number;
  maker: string;
  model: string;
  acceptsChange: boolean;
  color: '#000000' | '#FFFFFF' | '#F9312B' | '#F97C2B' | '#F3DB0E' | '#0EF32A' | '#7DF30E' | '#0EF3CD' | '#0EB8F3' | '#0E6CF3' | '#AA0EF3' | '#F30EBF';
  gasolineType: 'Diesel' | 'Gasoline' | 'Eletric' | 'Flex';
  ipvaIsPaid: boolean;
  isArmored: boolean;
  isLicensed: boolean;
  kilometersTraveled: number;
  makeDate: number;
  makedDate: number;
  message: string;
  numberOfViews: number;
  plate: string;
  price: number;
  typeOfExchange: 'Manual' | 'Automatic';
  address: Address;
  pictures: string[];
}
