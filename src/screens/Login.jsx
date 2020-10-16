import React from 'react';
import Button from 'react-bootstrap/Button'
import { login, getMessages } from '../services/index'
<<<<<<< HEAD
import '../styles/Login.css'
=======
import {Link} from 'react-router-dom'
>>>>>>> a4b4440c9ad2058a073c0c72a43afe45899f6a79

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }

    // componentDidMount = async () => {
    //     console.log(await getMessages())
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = async () => {
        const user = { 
            username: this.state.username,
            password: this.state.password,
        }
        const resp = await login(user)
        this.props.setUser(resp.data.username);
        // console.log(resp)
    }

    render() {
        return(
            <form className='login'>
                <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
                <Link to="/messages"><Button id="button" onClick={this.handleLogin}>Login</Button></Link>
            </form>
        )
    }
}

export default Login;