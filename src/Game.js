import React from 'react';
import Stars from './components/Stars';
import Buttons from './components/Button';
import Answer from './components/Answer';
import Numbers from './components/Numbers';
import './App.css';
const _ = require("underscore");

var possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    var listSize = arr.length, combinationsCount = (1 << listSize)
    for (var i = 1; i < combinationsCount ; i++ ) {
      var combinationSum = 0;
      for (var j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  };

export class Game extends React.Component {
    static randomNumber = () => 1 + Math.floor(Math.random()*9);
    static initialState = () => ({
        randomNumberOfStars: Game.randomNumber(),
        selectedNumbers: [],
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null,
    })
    state = Game.initialState();

    resetGame = () => this.setState(Game.initialState());

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
            randomNumberOfStars: Game.randomNumber(), //reset steps
            selectedNumbers: [], 
            answerIsCorrect: null,
        }), this.updateDoneStatus);
    }

    redraw = () => {
        if(this.state.redraws === 0){ return; }
        this.setState(prevState => ({
            randomNumberOfStars: Game.randomNumber(),
            selectedNumbers: [],
            answerIsCorrect: null,
            redraws: prevState.redraws - 1,
        }), this.updateDoneStatus);
    }

    possibleSolutions = ({randomNumberOfStars, usedNumbers}) => {
        const possibleNumbers = _.range(1, 10).filter(number => 
                usedNumbers.indexOf(number) === -1
            );

        return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
    }

    updateDoneStatus = () => {
        this.setState(prevState => {
            if(prevState.usedNumbers.length === 9)
            { 
                return {doneStatus: 'Done.Nice !'};
            }
            if(prevState.redraws === 0 && !this.possibleSolutions(prevState))
            {
                return {doneStatus: 'Game Over !'};
            }
        });
    }

    render() {

        const DoneFrame = (props) => {
            return (
                <div className="text-center">
                    <h2>{props.doneStatus}</h2>
                    <button className="btn btn-secondary" onClick={props.resetGame}>
                        Play Again
                    </button>
                </div>
            );
        }

        const {
                randomNumberOfStars,
                selectedNumbers, 
                answerIsCorrect, 
                usedNumbers,
                redraws,
                doneStatus 
            } = this.state;
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={randomNumberOfStars}/>

                    <Buttons selectedNumbers={selectedNumbers}
                             acceptAnswer={this.acceptAnswer}
                             redraws={redraws}
                             redraw={this.redraw}
                             checkAnswer={this.checkAnswer}
                             answerIsCorrect={answerIsCorrect} />

                    <Answer selectedNumbers={selectedNumbers}
                            unselectNumber={this.unselectNumber} />
                </div>
                <br />
                {
                    doneStatus ?
                    <DoneFrame doneStatus={doneStatus}
                                resetGame={this.resetGame}/> :
                    <Numbers selectedNumbers={selectedNumbers}
                         selectNumber={this.selectNumber} 
                         usedNumbers={usedNumbers} />
                }
            </div>
        );
    }
}



export default Game;