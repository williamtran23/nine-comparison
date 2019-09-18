import React from 'react';

export class Answer extends React.Component {
    render(){
        return(
            <div className="col-5">
                {this.props.selectedNumbers.map((number, i) =>
                    <span key={i}
                        onClick={(event) => this.props.unselectNumber(number)}>
                        {number}
                    </span>    
                )}
            </div>
        );
    }
}


export default Answer;