import React, { Component } from "react";
import { GameFieldContainer } from "./components/GameFieldContainer";
import {
  calculateWinner,
  calculateDraw,
} from "./components/InformationContainer";
import { InformationContainer } from "./components/InformationContainer";
import {} from "./App.css";
import { connect } from "react-redux";
import { NEW_GAME, nextTurn } from "../src/actions";

export class OldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xIsNext: true,
      winner: true,
      draw: true,
    };
  }
  componentDidMount() {
    console.log(this.props.field);
    this.setState({ draw: calculateDraw(this.props.field) });
    this.setState({ winner: calculateWinner(this.props.field) });
  }

  handleClick = (index) => {
    const fieldCopy = this.props.field;
    if (this.state.winner || fieldCopy[index]) return;
    if (!this.state.draw) return;
    fieldCopy[index] = this.state.xIsNext ? "X" : "O";
    this.props.dispatch(nextTurn({ index: index, sim: fieldCopy[index] }));
    this.setState({ xIsNext: !this.state.xIsNext });
    this.setState({ draw: calculateDraw(this.props.field) });
    this.setState({ winner: calculateWinner(this.props.field) });
  };

  startNewGame = () => {
    return (
      <button
        className="startButton"
        onClick={() => {
          this.props.dispatch(NEW_GAME);
          this.setState({ xIsNext: true });
          this.setState({ draw: true });
          this.setState({ winner: false });
        }}
      >
        Новая игра
      </button>
    );
  };

  render() {
    return (
      <div className="App">
        <InformationContainer
          turn={this.state.xIsNext}
          winner={this.state.winner}
          draw={this.state.draw}
        />
        <GameFieldContainer click={this.handleClick} />
        {this.startNewGame()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  field: state,
});

export const App = connect(mapStateToProps)(OldApp);
