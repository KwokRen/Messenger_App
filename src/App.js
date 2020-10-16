import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// import logo from './logo.svg';
import Icon from './components/Icon'
import LandingPage from './screens/LandingPage'
import Register from './screens/Register';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div class="icon-container">
          <Link to="/"><Icon /></Link>
        </div>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Icon />
//       <LandingPage />
//     </div>
//   );
// }

export default App;
