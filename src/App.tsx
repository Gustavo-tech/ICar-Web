import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import PersonalInfo from './pages/PersonalInfo/PersonalInfo'
import Security from './pages/Security/Security'
import Redirecting from './pages/Redirecting/Redirecting'
import SellCar from './pages/SellCar/SellCar'
import MyCars from './pages/MyCars/MyCars'
import Messages from './pages/Messages/Messages'

import GlobalStyle from './global/styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { clientConfig } from './configurations/open-id'
import { AuthenticationProvider, withOidcSecure, InMemoryWebStorage } from '@axa-fr/react-oidc-context'
import ModalProvider from './contexts/ModalContext'
import UIProvider from './contexts/UIContext'
import Authenticating from './pages/Authenticating/Authenticating'

const App = () => (
  <AuthenticationProvider
    configuration={clientConfig}
    UserStore={InMemoryWebStorage}
    isEnabled={true}
    authenticating={Redirecting}
    callbackComponentOverride={Authenticating}
  >
    <ModalProvider>
      <UIProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={withOidcSecure(Home)} />
            <Route exact path='/account/personal' component={withOidcSecure(PersonalInfo)} />
            <Route exact path='/account/security' component={withOidcSecure(Security)} />
            <Route exact path='/mycars' component={withOidcSecure(MyCars)} />
            <Route exact path='/messages' component={withOidcSecure(Messages)} />
            <Route exact path='/car/sell' component={withOidcSecure(SellCar)} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle />
      </UIProvider>
    </ModalProvider>
  </AuthenticationProvider>
)

export default App
