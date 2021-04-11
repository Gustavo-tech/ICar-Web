// React
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Login from './pages/Login/Login';

// Styles
import GlobalStyle from './global/styles';

// Bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
   
  );
}

export default App;
