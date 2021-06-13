// react
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';

// styles
import GlobalStyle from './global/styles';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// context
import { ProfileProvider } from './contexts/ProfileContext';

const App = () => {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/account/personal' component={PersonalInfo} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ProfileProvider >

  );
}

export default App;
