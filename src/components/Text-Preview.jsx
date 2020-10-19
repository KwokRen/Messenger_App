import React from 'react'

class TextPreview extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log(this.props.messages)
        return(
            <div>
                {this.props.messages}
                {this.props.sender}
                {this.props.avatar}
            </div>
        )
    }
}

export default TextPreview;