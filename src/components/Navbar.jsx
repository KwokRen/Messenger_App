import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'
import {getMessages, login} from '../services'
import '../styles/Navbar.css'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            icon: 'https://www.avisystems.com/hubfs/AVI%20Logos/AVI_logo_CMYK_WhiteRule.svg'
        }
    }

    componentDidMount = () => {
        this.populate()
    }

    populate = async() => {
        console.log(localStorage.getItem('user'))
        this.setState({
            username: localStorage.getItem('user')
        })
    }

    render() {
        return (
            <div className="navbar">
                <Icon />
                <div className="username">{this.state.username}</div>
                <div ><img className="avatar" src={this.state.icon} alt="test"/></div>
                <div className="logout">Logout</div>
            </div>
        )
    }
}

export default NavBar