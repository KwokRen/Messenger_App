import React from 'react'
import '../styles/Messages.css'
import {Form} from 'react-bootstrap'
// import Api from '../services/apiConfig';
import TextPreview from '../components/Text-Preview'
import {getMessages} from '../services/index'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: null
        }
    }

    componentDidMount() {
        console.log(getMessages());
    }

    render() {
        return (
            <div className="message">
                {/* <h1>Messages</h1> */}
                <div className="message-container">
                    <div className="message-list-container"><TextPreview /></div>
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