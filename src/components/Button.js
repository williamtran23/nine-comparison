import React from 'react';
import { Button } from 'react-bootstrap';

export class Buttons extends React.Component {
    render() {
        let button;
        switch (this.props.answerIsCorrect) {
            case true:
                button =
                <Button variant="success" >
                    <i className="fa fa-check"></i>
                </Button>;
                break;

            case false:
                button =
                <Button variant="danger" >
                    <i className="fa fa-times"></i>
                </Button>;
                break;

            default:
                button =
                <Button variant="dark" 
                        onClick={this.props.checkAnswer}
                        disabled={this.props.selectedNumbers.length === 0}>
                    =
                </Button>;
                break;
        }
        return (
            <div className="col-2">
                {button}
            </div>
        );
    }
}


export default Buttons;