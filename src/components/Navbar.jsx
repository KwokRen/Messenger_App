import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'
import {getMessages, login} from '../services'

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
                <div>{this.state.username}</div>
                <div><img src={this.state.icon} alt="test"/></div>
                <div className="logout">Logout</div>
            </div>
        )
    }
}

export default NavBar