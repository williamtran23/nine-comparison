import React from 'react';
import Stars from './components/Stars';
import Buttons from './components/Button';
import Answer from './components/Answer';
import Numbers from './components/Numbers';
import './App.css';

export class Game extends React.Component {
    state = {
        selectedNumbers: [],
        randomNumberOfStars: 1 + Math.floor(Math.random()*9),
    };

    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0){ return; }
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            selectedNumbers: prevState.selectedNumbers
                                    .filter(number => number !== clickedNumber)
        }));
    }
    render() {
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars randomNumberOfStars={this.state.randomNumberOfStars}/>
                    <Buttons selectedNumbers={this.state.selectedNumbers}/>
                    <Answer selectedNumbers={this.state.selectedNumbers}
                            unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}
                         selectNumber={this.selectNumber} />
            </div>
        );
    }
}


export default Game;