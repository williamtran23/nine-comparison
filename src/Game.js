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
        answerIsCorrect: null,
        usedNumbers: [],
    };

    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber) >= 0
        || this.state.usedNumbers.indexOf(clickedNumber) >= 0){ return; }
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers
                                    .filter(number => number !== clickedNumber)
        }));
    }

    checkAnswer = () => {
        this.setState(prevState =>({
            answerIsCorrect: prevState.randomNumberOfStars ===
            prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    }

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [], //reset selected numbers
            answerIsCorrect: null,
            randomNumberOfStars: 1 + Math.floor(Math.random()*9),
        }));
    }

    render() {
        const {selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers} = this.state;
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars}/>
                    <Buttons selectedNumbers={selectedNumbers}
                             acceptAnswer={this.acceptAnswer}
                             checkAnswer={this.checkAnswer}
                             answerIsCorrect={answerIsCorrect} />
                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber} />
                </div>
                <br />
                <Numbers selectedNumbers={selectedNumbers}
                         selectNumber={this.selectNumber} 
                         usedNumbers={usedNumbers} />
            </div>
        );
    }
}


export default Game;