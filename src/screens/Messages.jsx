import React from 'react'
import '../styles/Messages.css'
import {Form} from 'react-bootstrap'
import Api from '../services/apiConfig';
import TextPreview from '../components/Text-Preview'
import {getMessages} from '../services/index'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.populate();
    }

    populate = async () => {
        try {
            const resp = await Api.get('cloud_msg/messages/');
            this.setState({messages: resp.data.results})
            return resp;
        } catch (error) {
            throw error;
        }
     }

    render() {
        const {messages} = this.state;
        // console.log(this.state.messages)
        // console.log(this.state.messages.id)
        const textpreviews = messages.map(message => <TextPreview 
            key={message.id}
            messages={message.message}
            sender={message.sender_name}
            avatar={message.sender_avatar}
            />)
        return (
            <div className="message">
                {/* <h1>Messages</h1> */}
                <div className="message-container">
                    <div className="message-list-container">
                        <div>
                            <ul>
                                {textpreviews}
                                {/* {messages.map(message => <TextPreview 
                                key={message.id}
                                messages={message.message}
                                sender={message.sender_name}
                                avatar={message.sender_avatar}
                                />)} */}

                                {/* <TextPreview messages={this.state.messages}/> */}
                                {/* {messages.map(message => <li>{message.message}</li>)} */}
                            </ul>
                        </div>
                    </div>
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