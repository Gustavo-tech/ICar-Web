// react
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';

// styles
import GlobalStyle from './global/styles';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
   
  );
}

export default App;
