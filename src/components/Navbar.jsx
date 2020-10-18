import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'
// import {getMessages, login} from '../services'
import Api from '../services/apiConfig';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            icon: 'https://i0.wp.com/postmatura.al/wp-content/uploads/2018/10/blank-profile-picture-png.png?fit=512%2C512&ssl=1'
        }
    }

    componentDidMount = () => {
        this.getUserProfile();
    }

    getUserProfile = async () => {
       try {
           const resp = await Api.get('cloud_msg/UserProfiles/');
           if (resp.status === 200) {
                console.log(resp)
                const userProfile = resp.data.results.find(UserProfile => UserProfile.user === this.props.user);
                if (userProfile.avatar) {
                    this.setState({icon: userProfile.avatar})
                }
           }
       } catch (error) {
           throw error;
       }
    }

    render() {
        return (
        <div>
            <Navbar bg="dark" expand="lg">  
                <Navbar.Brand id="cloud-icon" href="/messages"><Icon /></Navbar.Brand>
                    <div className="user">
                        <img id="profile-picture" src={this.state.icon} alt="profilepicture"/>
                        <div id="username">{this.props.user}</div>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <img id="profile-picture" src={this.state.icon} alt="profilepicture"/>     */}
                        {/* <div id="username">{this.props.user}</div> */}
                        <Nav.Link id="link-to-profile" to="/userprofile" variant="light">Profile</Nav.Link>
                        <Nav.Link id="logout" variant="light">Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
        )
    }
}

export default NavBar