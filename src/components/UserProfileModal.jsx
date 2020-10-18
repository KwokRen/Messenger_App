import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import '../styles/UserProfile.css'

export class UserProfileModal extends React.Component{
    constructor(props){
        super(props);
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
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
            </InputGroup>
                
            </Modal.Footer>
            <Modal.Footer id="delete-footer">
              <Button id="delete-account" onClick={this.props.onHide}>Delete Account</Button>
            </Modal.Footer>
            <Modal.Footer>
              <Button  id="save-changes" onClick={this.props.onHide}>Save Changes</Button>
            </Modal.Footer>
          </Modal>

        );
    }
}

export default UserProfileModal