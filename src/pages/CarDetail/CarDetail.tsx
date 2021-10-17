import { useReactOidc } from '@axa-fr/react-oidc-context'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCarWithId } from '../../api/car/get'
import CenteredSpinner from '../../components/CenteredSpinner/CenteredSpinner'
import AppNavbar from '../../components/Navbar/Navbar'
import { UIContext } from '../../contexts/UIContext'
import Car from '../../models/car'
import { Page } from './styles'

const CarDetail = () => {
  const [car, setCar] = useState<Car | undefined>(undefined)

  const { isLoading, setIsLoading } = useContext(UIContext)
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    setIsLoading(true)
    getCarWithId(access_token, Number.parseInt(id), (data: Car) => {
      // setIsLoading(false)
      setCar(data)
    })
  }, [])

  return (
    <Page>
      <AppNavbar showSearch />

      {isLoading &&
        <CenteredSpinner animation="border" />}
    </Page>
  )
}

export default CarDetail
