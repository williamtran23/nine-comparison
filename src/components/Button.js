import React from 'react';
import { Button } from 'react-bootstrap';

export class Buttons extends React.Component {
    render(){
        return(
            <div className="col-2">
                <Button variant="dark" disabled={this.props.selectedNumbers.length === 0}>=</Button>
            </div>
        );
    }
}


export default Buttons;