import React from 'react'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import { register } from '../services/index'
import '../styles/Register.css'

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

    handleRegister = async () => {
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const resp = await register(user)
        console.log(resp)
        this.props.setUser(resp.data.username)
    }

    render() {
        return(
            <form className='register'>
                <div className="input">
                    <input type="text" name='username' placeholder='Create Username' value={this.state.username} onChange={this.handleChange}/>
                    <input type="email" name='email' placeholder='Create Email' value={this.state.email} onChange={this.handleChange}/>
                    <input type="password" name='password' placeholder='Create Password' value={this.state.password} onChange={this.handleChange}/>
                    <Link to="/messages"><Button id="register-button" onClick={this.handleRegister}>Sign Up</Button></Link>
                </div>
            </form>
        )
    }
}

export default Register