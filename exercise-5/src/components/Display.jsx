import { Component } from 'react';
import './../styles/Display.css'

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input 
                readOnly
                placeholder="0"
                value={this.props.displayValue}
                className="display"
            />
        )
    }
}

export default Display;