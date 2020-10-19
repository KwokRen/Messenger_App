import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import '../styles/UserProfile.css'
import {updateProfile, deleteUser} from '../services/index.js'


export class UserProfileModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            avatar: null
        }
    }

    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    saveChanges = async () => {
        const userprofile = { 
            avatar: this.state.avatar
        }
        const resp = await updateProfile(userprofile, this.props.profileID)
        console.log(resp.data)
        this.props.onHide();
        this.props.refresh();
    }

    deleteAccount = async () => {
        const resp = await deleteUser(this.props.userID)
        console.log(resp.data)
        this.props.onHide();
        this.props.logout();

    }


    render(){
        return(
            <Modal
            {...this.props}
            size="x-lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                User Profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Footer class="section">
                
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">USERNAME</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl
                    placeholder="Your username"
                    name="username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
                
            </Modal.Footer>

            <Modal.Footer class="section">
                
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">PASSWORD</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl
                    placeholder="Your password"
                    name="password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
                
            </Modal.Footer>

            <Modal.Footer class="section">
                
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon2">AVATAR</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl
                    placeholder="Enter an image URL"
                    name="avatar"
                    aria-label="Avatar"
                    aria-describedby="basic-addon1"
                    value={this.state.avatar}
                    onChange={this.handleChange}
                    />
            </InputGroup>
                
            </Modal.Footer>
            <Modal.Footer id="delete-footer">
              <Button id="delete-account" onClick={this.deleteAccount}>Delete Account</Button>
            </Modal.Footer>
            <Modal.Footer>
              <Button  id="save-changes" onClick={this.saveChanges}>Save Changes</Button>
            </Modal.Footer>
          </Modal>

        );
    }
}

export default UserProfileModal