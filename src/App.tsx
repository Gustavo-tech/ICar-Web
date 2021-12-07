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
import News from './pages/News/News'

import GlobalStyle from './global/styles'
import 'bootstrap/dist/css/bootstrap.min.css'

import { clientConfig } from './configurations/open-id'
import {
  AuthenticationProvider,
  withOidcSecure,
  InMemoryWebStorage
} from '@axa-fr/react-oidc-context'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import UIProvider from './contexts/UIContext'
import Authenticating from './pages/Authenticating/Authenticating'
import SellingCars from './pages/Selling/Selling'
import CarContextProvider from './contexts/CarContext'
import NewsContextProvider from './contexts/NewsContext'
import NewsDetail from './pages/NewsDetail/NewsDetail'
import CreateNews from './pages/CreateNews/CreateNews'
import MyNews from './pages/MyNews/MyNews'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "F02C13",
      main: "#DC250E",
      dark: "#C82611",
    },
    secondary: {
      light: '#EBE4E4',
      main: '#E3DDDD',
      dark: '#D6CFCF'
    },
    text: {
      primary: "#FFFFF"
    }
  }

})

const App = () => (
  <AuthenticationProvider
    configuration={clientConfig}
    UserStore={InMemoryWebStorage}
    isEnabled={true}
    authenticating={Redirecting}
    callbackComponentOverride={Authenticating}
  >
    <ThemeProvider theme={theme}>
      <UIProvider>
        <CarContextProvider>
          <NewsContextProvider>
            <BrowserRouter>
              <Switch>

                {/* home */}
                <Route exact path="/" component={withOidcSecure(Home)} />

                {/* Account routes */}
                <Route exact path='/account/personal' component={withOidcSecure(PersonalInfo)} />
                <Route exact path='/account/security' component={withOidcSecure(Security)} />

                {/* Car routes */}
                <Route exact path='/mycars' component={withOidcSecure(MyCars)} />
                <Route exact path='/selling' component={withOidcSecure(SellingCars)} />
                <Route exact path='/selling/:id' component={withOidcSecure(CarDetail)} />
                <Route exact path='/car/sell' component={withOidcSecure(SellCar)} />

                {/* Chat routes */}
                <Route exact path='/messages' component={withOidcSecure(Messages)} />

                {/* News routes */}
                <Route exact path='/news/create' component={withOidcSecure(CreateNews)} />
                <Route exact path='/news/details/:id' component={withOidcSecure(NewsDetail)} />
                <Route exact path='/news' component={withOidcSecure(News)} />
                <Route exact path='/mynews' component={withOidcSecure(MyNews)} />

                {/* Routes that does not exists */}
                <Route exact path='*' component={NotFound} />
              </Switch>
            </BrowserRouter>
            <GlobalStyle />
          </NewsContextProvider>
        </CarContextProvider>
      </UIProvider>
    </ThemeProvider>
  </AuthenticationProvider>
)

export default App
