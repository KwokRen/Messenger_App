import React from 'react'
import Button from 'react-bootstrap/Button';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            error: null
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
            <form className='register'>
                <input type="text" name='username' placeholder='Create Username' value={this.state.username} onChange={this.handleChange}/>

                <input type="email" name='email' placeholder='Create Email' value={this.state.email} onChange={this.handleChange}/>

                <input type="password" name='password' placeholder='Create Password' value={this.state.password} onChange={this.handleChange}/>
                <Button>Submit</Button>
            </form>
        )
    }
}

export default Register