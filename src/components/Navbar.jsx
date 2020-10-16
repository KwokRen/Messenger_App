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

    // componentDidMount = () => {
    //     this.populate()
    // }

    // populate = async() => {
    //     this.setState({
    //         username: 
    //     })
    // }

    render() {
        return (
            <div className="navbar">
                <Icon />
                    <div className="userprofile">
                        <img className="avatar" src={this.state.icon} alt="test"/>
                        <div className="username">{this.props.user}</div> 
                    </div>
                <div className="logout">Logout</div>
            </div>
        )
    }
}

export default NavBar