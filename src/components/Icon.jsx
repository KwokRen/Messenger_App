import React from 'react'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

import '../styles/Icon.css'


const Icon = () => {
    return (
        <div className="icon">
            <FontAwesomeIcon icon={faCloud} />
        </div>
    )
}


export default Icon