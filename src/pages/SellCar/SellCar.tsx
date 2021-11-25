import { useState } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Container from '@material-ui/core/Container'
import AppNavbar from '../../components/Navbar/Navbar'
import { useStyles } from './styles'
import CarPictures from './components/CarPictures/CarPictures'
import CarDetails from './components/CarDetails/CarDetails'
import CarAddress from './components/CarAddress/CarAddress'
import CarResult from './components/CarResult/CarResult'

const SellCar = () => {

  const [step, setStep] = useState<number>(2)

  function handleNextClick(): void {
    if (step < 4)
      setStep(step + 1)
  }

  function handleBackClick(): void {
    if (step !== 0)
      setStep(step - 1)
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
          <Step><StepLabel>Result</StepLabel></Step>
        </Stepper>

        {step === 0 &&
          <CarPictures onNextClick={handleNextClick} />}

        {step === 1 &&
          <CarDetails onNextClick={handleNextClick} onBackClick={handleBackClick} />}

        {step === 2 &&
          <CarAddress onNextClick={handleNextClick} onPreviousClick={handleBackClick} />}

        {step === 4 &&
          <CarResult resetSteps={() => setStep(0)} />}

      </Container>
    </>
  )
}

export default SellCar
