import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo'
import Security from './pages/Security/Security'
import Redirecting from './pages/Redirecting/Redirecting'
import SellCar from './pages/SellCar/SellCar'
import MyCars from './pages/MyCars/MyCars'
import Messages from './pages/Messages/Messages'
import CarDetail from './pages/CarDetail/CarDetail'

import GlobalStyle from './global/styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { clientConfig } from './configurations/open-id'
import {
  AuthenticationProvider,
  withOidcSecure,
  InMemoryWebStorage
} from '@axa-fr/react-oidc-context'
import UIProvider from './contexts/UIContext'
import Authenticating from './pages/Authenticating/Authenticating'
import SellingCars from './pages/Selling/Selling'
import CarContextProvider from './contexts/CarContext'

const App = () => (
  <AuthenticationProvider
    configuration={clientConfig}
    UserStore={InMemoryWebStorage}
    isEnabled={true}
    authenticating={Redirecting}
    callbackComponentOverride={Authenticating}
  >
    <UIProvider>
      <CarContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={withOidcSecure(Home)} />
            <Route exact path='/account/personal' component={withOidcSecure(PersonalInfo)} />
            <Route exact path='/account/security' component={withOidcSecure(Security)} />
            <Route exact path='/mycars' component={withOidcSecure(MyCars)} />
            <Route exact path='/selling' component={withOidcSecure(SellingCars)} />
            <Route exact path='/selling/:id' component={withOidcSecure(CarDetail)} />
            <Route exact path='/messages' component={withOidcSecure(Messages)} />
            <Route exact path='/car/sell' component={withOidcSecure(SellCar)} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </CarContextProvider>
    </UIProvider>
  </AuthenticationProvider>
)

export default App
