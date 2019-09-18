import React from 'react';
const _ = require("underscore");

export class Stars extends React.Component {
    render(){
        const numberOfStars = 1 + Math.floor(Math.random()*9);
        // let stars = [];

        // for (let i = 0; i < numberOfStars; i++) {
                    
        //     stars.push(<i key={i} className="fa fa-star"></i>);
        // }

        return(
            <div className="col-5">
                {_.range(numberOfStars).map(i =>
                    <i key={i} className="fa fa-star"></i>
                )}
            </div>
        );
    }
}


export default Stars;