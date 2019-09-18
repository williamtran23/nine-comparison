import React from 'react';
import Stars from './components/Stars';
import Button from './components/Button';
import Answer from './components/Answer';
import Numbers from './components/Numbers';
import './App.css';

export class Game extends React.Component {
    state = {
        selectedNumbers: [],
    };
    render() {
        return(
            <div className="container">
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answer selectedNumbers={this.state.selectedNumbers}/>
                </div>
                <br />
                <Numbers selectedNumbers={this.state.selectedNumbers}/>
            </div>
        );
    }
}


export default Game;