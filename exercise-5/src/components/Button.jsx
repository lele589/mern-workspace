import { Component } from 'react';
import './../styles/Buttons.css'

class Button extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return(
            <button 
                className="button" 
                style={{ backgroundColor: this.props.color}} 
                onClick={this.props.updateDisplay}
                disabled={this.props.isDisabled}
            >
                {this.props.value}
            </button>
        )
    }
}

export default Button;