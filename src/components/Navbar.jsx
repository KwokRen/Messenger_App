import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'
import {getMessages, login} from '../services'
import Api from '../services/apiConfig';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            icon: 'https://www.avisystems.com/hubfs/AVI%20Logos/AVI_logo_CMYK_WhiteRule.svg'
        }
    }

    componentDidMount = () => {
        this.getUserProfile();
    }

    getUserProfile = async () => {
       try {
           const resp = await Api.get('cloud_msg/UserProfiles/');
           if (resp.status === 200) {
                const userProfile = resp.data.results.find(UserProfile => UserProfile.user === this.props.user);
                this.setState({icon: userProfile.avatar})
           }
       } catch (error) {
           throw error;
       }
    }

    render() {
        return (
            <div className="navbar">
                <Icon />
                <div className="nav-right">
                    <img className="userimage" src={this.state.icon} alt="test"/>
                    <div className="username">{this.props.user}</div> 
                    <div className="logout">Logout</div>
                </div>
            </div>
        )
    }
}

export default NavBar