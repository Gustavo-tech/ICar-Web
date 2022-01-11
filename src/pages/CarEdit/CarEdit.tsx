import { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import Container from '@material-ui/core/Container'
import Stepper from '@material-ui/core/Stepper'
import StepLabel from '@material-ui/core/StepLabel'
import { useParams } from 'react-router-dom'
import AppNavbar from "../../components/Navbar/Navbar"
import { CarContext } from '../../contexts/CarContext'
import { useStyles } from './styles'
import Step from '@material-ui/core/Step'
import CarPictures from '../../components/CarPictures/CarPictures'
import CarDetails from '../../components/CarDetails/CarDetails'
import CarAddress from '../../components/CarAddress/CarAddress'

type ParamsProps = {
  id: string;
}

const CarEdit = () => {

  const [step, setStep] = useState<number>(0)

  const { fetchCar, reset, updateCarProperties } = useContext(CarContext)

  const { id } = useParams<ParamsProps>()
  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser

  const history = useHistory()

  useEffect(() => {
    fetchCar(id, access_token)

    return () => {
      reset()
    }
  }, [])

  function handleNextClick(): void {
    if (step < 3)
      setStep(step + 1)
  }

  function handleBackClick(): void {
    if (step !== 0)
      setStep(step - 1)
  }

  function handleUpdateClick(): void {
    updateCarProperties(access_token, () => {
      history.push(`/selling/${id}`)
    })
  }

  const classes = useStyles()
  return (
    <>
      <AppNavbar showSearch={false} />

      <Container className={classes.container}>
        <Stepper alternativeLabel activeStep={step}>
          <Step><StepLabel>Pictures</StepLabel></Step>
          <Step><StepLabel>Car Details</StepLabel></Step>
          <Step><StepLabel>Address</StepLabel></Step>
        </Stepper>

        {step === 0 &&
          <CarPictures onNextClick={handleNextClick} />}

        {step === 1 &&
          <CarDetails
            onNextClick={handleNextClick}
            onBackClick={handleBackClick}
            isUpdate={true}
          />}

        {step === 2 &&
          <CarAddress onNextClick={handleUpdateClick} onPreviousClick={handleBackClick} />}

      </Container>
    </>
  )
}

export default CarEdit
