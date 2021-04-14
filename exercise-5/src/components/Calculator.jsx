import { Component } from 'react';
import '../styles/Calculator.css';
import Button from './Button';
import Display from './Display';

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {
            operations: ['+', '-', '*', '/'],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            displayValue: '',
            lastClickNaN: true,
            hasOperator: false,
        }
    }

    updateDisplay = (event) => {
        const targetNumber = this.state.numbers.includes(Number(event.target.innerText));
        const targetOperator = this.state.operations.includes(event.target.innerText);

        if (targetNumber || event.target.innerText === '0') {
            this.setState({
                displayValue: this.state.displayValue + event.target.innerText,
                lastClickNaN: isNaN(Number(event.target.innerText)),
                hasOperator: targetOperator
            });
        } else if (targetOperator) {
            if(!this.state.hasOperator) {
                this.setState({
                    displayValue: this.state.displayValue + event.target.innerText,
                    lastClickNaN: isNaN(Number(event.target.innerText)),
                    hasOperator: true
                });  
            }
        } else {
            this.setState({
                displayValue: event.target.innerText,
            });
        }  
    }

    clearDisplay = () => {
        this.setState({
            displayValue: '',
            lastClickNaN: true,
            hasOperator: false
        })
    }

    getTotal = () => {
        if(!this.state.lastClickNaN || this.state.displayValue !== null) {
            this.setState({
                displayValue: eval(this.state.displayValue),
                lastClickNaN: false,
                hasOperator: false
            })
        }
    }

    render() {
        return(
            <div className="calculator">
                <Display displayValue={this.state.displayValue} />

                <div className="calculator__keyboard">
                     <div className="calculator__operations">
                        {this.state.operations.map((value, index) => {
                            return <Button isDisabled={this.state.displayValue === '' || this.state.lastClickNaN} color="#bbb" value={value} key={index} updateDisplay={this.updateDisplay} />
                        })}
                    </div>

                    <div className="calculator__numbers">
                        {this.state.numbers.map((value, index) => {
                            return <Button color="#eee" value={value} key={index} updateDisplay={this.updateDisplay} />
                        })}
                        <Button color="#eee" isDisabled={this.state.displayValue === ''} value="0" updateDisplay={this.updateDisplay} />
                        <Button color="#dd9090" value="C" updateDisplay={this.clearDisplay} />
                        <Button color="#d99249" isDisabled={this.state.displayValue === '' || this.state.lastClickNaN} value="=" updateDisplay={this.getTotal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;