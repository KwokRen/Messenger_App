import React from 'react'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import LogoText from './Logo-Text'

import '../styles/Icon.css'


const Icon = () => {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faCloud} />
            <LogoText />
        </div>
    )
}


export default Icon