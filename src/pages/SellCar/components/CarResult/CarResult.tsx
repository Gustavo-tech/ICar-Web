import { useContext } from 'react'
import { CarContext } from '../../../../contexts/CarContext'
import { UIContext } from '../../../../contexts/UIContext'

const CarResult = () => {

  const { isLoading, setIsLoading } = useContext(UIContext)
  const {
    plate,
    maker,
    model,
    makeDate,
    makedDate,
    kilometers,
    price,
    exchangeType,
    gasolineType,
    color,
    message,
    acceptsChange,
    isArmored,
    ipvaIsPaid,
    isLicensed,
    pictures,
    zipCode,
    location,
    district,
    street
  } = useContext(CarContext)

  return (
    <div>

    </div>
  )
}

export default CarResult
