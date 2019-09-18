import React from 'react';
const _ = require("underscore");

export class Stars extends React.Component {
    render(){
        return(
            <div className="col-5">
                {_.range(this.props.numberOfStars).map(i =>
                    <i key={i} className="fa fa-star"></i>
                )}
            </div>
        );
    }
}


export default Stars;