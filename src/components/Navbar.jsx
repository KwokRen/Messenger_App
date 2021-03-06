import React from 'react'
// import Navbar from 'react-bootstrap/Navbar';
import Icon from '../components/Icon'
// import {getMessages, login} from '../services'
import Api from '../services/apiConfig';
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {Navbar, Nav} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import UserProfileModal from '../components/UserProfileModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../services/index'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow : false,
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
                // console.log(resp)
                const userProfile = resp.data.results.find(UserProfile => UserProfile.user === this.props.user);
                if (userProfile.avatar) {
                    this.setState({icon: userProfile.avatar})
                }
           }
       } catch (error) {
           throw error;
       }
    }

    handleLogout = async () => {
        this.setState({
            username: '',
            password: ''
        })
        logout();
        window.location.reload(false);
    }

    render() {

    let addModalClose =() => this.setState({addModalShow:false});
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
                    <ButtonToolbar id="user-profile">
                        <Button  id="user-profile-button"
                        onClick= {()=> this.setState({addModalShow: true})}>
                            User Profile
                        </Button>
                    </ButtonToolbar>

                    <UserProfileModal
                    user={this.props.username} 
                    profileID={this.props.profileID} 
                    userID={this.props.userID}
                    show={this.state.addModalShow}
                    refresh={this.getUserProfile}
                    logout={this.handleLogout}
                    onHide={addModalClose}/>
                    <Link to="/" id="logout">
                        <Nav variant="light" onClick={this.handleLogout}>Logout</Nav>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        )
    }
}

export default NavBar