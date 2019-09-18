import React from 'react';

export class Button extends React.Component {
    render(){
        return(
            <div className="col-2">
                <button disabled={this.props.selectedNumbers.length === 0}>=</button>
            </div>
        );
    }
}


export default Button;