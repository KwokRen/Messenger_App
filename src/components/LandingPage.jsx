import React from 'react'
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
                <Button>Create an Account</Button>
                <Button>I already have an account</Button>
            </div>
           </div>
        </div>
    )
}


export default LandingPage