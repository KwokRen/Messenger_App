import React from 'react'
import '../styles/Messages.css'
import {Form} from 'react-bootstrap'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="message">
                {/* <h1>Messages</h1> */}
                <div className="message-container">
                    <div className="message-list-container">List of Messages</div>
                    <div className="one-message-container"><Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Enter message"/>
                </Form.Group></div>
                </div>
                {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} />
                </Form.Group> */}
            </div>
        )
    }
}

export default Messages