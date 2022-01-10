export type newCar = {
  pictures: string[];
  plate: string;
  maker: string;
  model: string;
  makeDate: Number;
  makedDate: Number;
  price: Number;
  kilometersTraveled: Number;
  acceptsChange: boolean;
  ipvaIsPaid: boolean;
  isLicensed: boolean;
  isArmored: boolean;
  message: string;
  color: string;
  exchangeType: string;
  gasolineType: string;
  address: {
    zipCode: string;
    street: string;
    district: string;
    location: string;
  }
}
