import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Jordan'
        }
    }

    render() {
        return (
            <div className="navbar">
                <Icon />
                <div>{this.state.username}</div>
                <div className="logout">Logout</div>
            </div>
        )
    }
}

export default NavBar