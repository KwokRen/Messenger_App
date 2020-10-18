import React from 'react'

class TextPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }



    render() {
        return(
            <div className="icon">
                <h1>CLOUD MSG</h1>
            </div>
        )
    }
}

export default TextPreview;