import React from 'react';
import Button from 'react-bootstrap/Button'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return(
            <form className='login'>
                <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                <Button id="button">Login</Button>
            </form>
        )
    }
}

export default Login;