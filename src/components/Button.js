import React from 'react';
import { Button } from 'react-bootstrap';

export class Buttons extends React.Component {
    render() {
        let button;
        switch (this.props.answerIsCorrect) {
            case true:
                button =
                <Button variant="success" onClick={this.props.acceptAnswer}>
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
            <div className="col-2 text-center">
                {button}
                <br /><br />
                <Button variant="warning btn-sm" onClick={this.props.redraw}>
                    <i className="fa fa-refresh"> {this.props.redraws}</i>
                </Button>
            </div>
        );
    }
}


export default Buttons;