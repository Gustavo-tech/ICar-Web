// react
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';

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
          <Route path='/account' component={Account} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ProfileProvider >

  );
}

export default App;
