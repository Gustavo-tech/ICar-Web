import { useState, useContext, useEffect } from 'react'
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
import { CarContext } from '../../contexts/CarContext'
import { ContactContext } from '../../contexts/ContactContext'
import { useReactOidc } from '@axa-fr/react-oidc-context'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
import { UIContext } from '../../contexts/UIContext'
import { useHistory } from 'react-router-dom'

const SellCar = () => {

  const [step, setStep] = useState<number>(0)
  const [showContactWarning, setShowContactWarning] = useState<boolean>(false)

  const { oidcUser } = useReactOidc()
  const { access_token } = oidcUser
  const { createCar } = useContext(CarContext)
  const { contact, fetchMyContact } = useContext(ContactContext)
  const { isLoading } = useContext(UIContext)

  const history = useHistory()

  useEffect(() => {
    fetchMyContact(access_token)
  }, [access_token])

  useEffect(() => {
    if (contact.phoneNumber !== '')
      setShowContactWarning(false)

    else if (contact.phoneNumber === '' && !isLoading)
      setShowContactWarning(true)
  }, [contact])

  function handleNextClick(): void {
    if (step < 4)
      setStep(step + 1)
  }

  function handleBackClick(): void {
    if (step !== 0)
      setStep(step - 1)
  }

  function handleCreateClick(): void {
    createCar(access_token)

    if (step === 2) {
      setStep(step + 1)
    }
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

        <Dialog
          open={showContactWarning}
          onClose={() => setShowContactWarning(false)}
        >
          <DialogTitle>You don't have a registered contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You don't have a registered contact, you need to create one first,
              so that people can get in touch with you in case they are interested
              in some of your cars.
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => history.push('/account/contact')}
            >
              Create contact
            </Button>
          </DialogActions>
        </Dialog>

        {step === 0 &&
          <CarPictures onNextClick={handleNextClick} />}

        {step === 1 &&
          <CarDetails onNextClick={handleNextClick} onBackClick={handleBackClick} />}

        {step === 2 &&
          <CarAddress onNextClick={handleCreateClick} onPreviousClick={handleBackClick} />}

        {step === 3 &&
          <CarResult
            resetSteps={() => setStep(0)}
            onTryAgainClick={handleCreateClick}
          />}

      </Container>
    </>
  )
}

export default SellCar
