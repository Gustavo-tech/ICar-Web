// React
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Login from './pages/Login/Login';

// Styles
import GlobalStyle from './global/styles';
import Register from './pages/Register/Register';

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
