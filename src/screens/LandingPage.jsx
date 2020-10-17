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
                <Link to="/register"><Button id="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create an Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button></Link>
                <Link to="/login"><Button id="button2">I already have an account</Button></Link>
            </div>
           </div>
        </div>
    )
}


export default LandingPage