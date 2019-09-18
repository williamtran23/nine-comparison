import React from 'react';
const _ = require("underscore");

export class Numbers extends React.Component {
    
    render(){
        const numberClassName = (number) => {
            if(this.props.usedNumbers.indexOf(number) >= 0)
            {
                return 'used';
            }

            if(this.props.selectedNumbers.indexOf(number) >= 0)
            {
                return 'selected';
            }
        }

        return(
            <div className="card text-center">
                <div>
                    {Numbers.list.map((number, i) =>
                            <span key={i} 
                                  className={numberClassName(number)}
                                  onClick={(event) => this.props.selectNumber(number)}>
                            {number}
                            </span>
                        )}
                </div>
            </div>
        );
    }
}


Numbers.list = _.range(1, 10);

export default Numbers;