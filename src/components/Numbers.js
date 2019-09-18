import React from 'react';
const _ = require("underscore");



export class Numbers extends React.Component {
    render(){
        return(
            

            <div className="card text-center">
                <div>
                    {Numbers.list.map((number, i) =>
                            <span key={i} >{number}</span>
                        )}
                </div>
            </div>
        );
    }
}

Numbers.list = _.range(1, 10);



export default Numbers;