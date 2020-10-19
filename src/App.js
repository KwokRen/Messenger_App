import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
import Icon from './components/Icon'
import LogoText from './components/Logo-Text'
import LandingPage from './screens/LandingPage'
import Register from './screens/Register';
import Login from './screens/Login'
import NavBar from './components/Navbar'
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
          <BrowserRouter>
          {this.state.username && (<NavBar user={this.state.username}/>)}
            {this.state.username && <Route path="/messages">
                <Messages setUser={this.setUser} user={this.state.username}/>
              </Route>}
              {this.state.username && <Route path="/userprofile">
                <UserProfile />
              </Route>}
          {this.state.username === '' && <div className="view-container">
          <div className="icon-container">
            <Link to="/">
              <Icon />
              <LogoText />
            </Link>
          </div>
            <Switch>
              <Route path="/register">
                <Register setUser={this.setUser}/>
              </Route>
              <Route path="/login">
                <Login setUser={this.setUser} />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>}
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
