import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import Security from './pages/Security/Security';
import Redirecting from './pages/Redirecting/Redirecting';

import GlobalStyle from './global/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfileProvider } from './contexts/ProfileContext';

import { clientConfig } from './configurations/open-id'
import { AuthenticationProvider, withOidcSecure, InMemoryWebStorage } from '@axa-fr/react-oidc-context';

const App = () => (
  <AuthenticationProvider
    configuration={clientConfig}
    UserStore={InMemoryWebStorage}
    isEnabled={true}
    authenticating={Redirecting}
  >
    <ProfileProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withOidcSecure(Home)} />
          <Route exact path='/account' component={withOidcSecure(Account)} />
          <Route exact path='/account/personal' component={withOidcSecure(PersonalInfo)} />
          <Route exact path='/account/security' component={withOidcSecure(Security)} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ProfileProvider >
  </AuthenticationProvider>
);

export default App;
