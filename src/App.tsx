// react
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Login from './pages/Login/Login';

// styles
import GlobalStyle from './global/styles';
import Register from './pages/Register/Register';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
   
  );
}

export default App;
