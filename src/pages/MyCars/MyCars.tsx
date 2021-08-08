import { useReactOidc } from '@axa-fr/react-oidc-context'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { getUserCars } from '../../client/car/get'
import FilterSidebar from '../../components/Modals/FilterSidebar/FilterSidebar'
import AppNavbar from '../../components/Navbar/Navbar'
import {
  CenteredContent,
  ContentGrid
} from './styles'

const MyCars = () => {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  const { oidcUser } = useReactOidc()
  const { profile, access_token } = oidcUser
  const { email } = profile

  useEffect(() => {
    getUserCars('Bearer ' + access_token, email!, (response) => {
      setCars(response.data)
      setLoading(false)
    })
  }, [])

  let mainContent

  if (loading) {
    mainContent =
      <CenteredContent> <Spinner animation="border" variant="danger" /> </CenteredContent>
  }

  else if (cars.length > 0) {
    mainContent =
      <ContentGrid>
        <FilterSidebar />
        <h2>Hello</h2>
      </ContentGrid>
  }

  else {
    mainContent =
      <CenteredContent>
        <h2>Ops..</h2>
      </CenteredContent>
  }

  return (
    <>
      <AppNavbar />
      {mainContent}
    </>
  )
}

export default MyCars
