// React
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Login from './pages/Login/Login';

// Styles
import GlobalStyle from './global/styles';

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
