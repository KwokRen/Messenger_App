import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

// import logo from './logo.svg';
import Icon from './components/Icon'
import LogoText from './components/Logo-Text'
import LandingPage from './screens/LandingPage'
import Register from './screens/Register';
import Login from './screens/Login'
import Navbar from './components/Navbar'
import Messages from './screens/Messages'
import UserProfile from './screens/UserProfile'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  setUser = (username) => {
    this.setState({username: username})
  }

  render() {
    return (
      <div className="App">
        {this.state.username && (<Navbar user={this.state.username}/>)}
        <div className="view-container">
          <BrowserRouter>
          <div className="icon-container">
            <Link to="/">
              <Icon />
              <LogoText />
            </Link>
          </div>
            <Switch>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login setUser={this.setUser} />
              </Route>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/userprofile">
                <UserProfile />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
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
