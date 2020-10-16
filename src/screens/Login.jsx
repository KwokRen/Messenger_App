import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
    }
}