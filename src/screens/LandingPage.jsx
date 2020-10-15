import React from 'react'
import {Link} from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCloud } from '@fortawesome/free-solid-svg-icons'
// import LogoText from './Logo-Text'
import Button from 'react-bootstrap/Button';

import '../styles/LandingPage.css'



const LandingPage = () => {
    return (
        <div className="landingPage">
           <h1 className="landingMsg">Connect with artists worldwide</h1>
           <div className="buttonContainer">
            <div className="button">
<<<<<<< HEAD:src/components/LandingPage.jsx
                <Button id="button1">Create an Account</Button>
                <Button id="button2">I already have an account</Button>
=======
                <Link to="/register"><Button>Create an Account</Button></Link>
                <Button>I already have an account</Button>
>>>>>>> 2de96d8237ea6047d54249fefda95de95584cd4e:src/screens/LandingPage.jsx
            </div>
           </div>
        </div>
    )
}


export default LandingPage