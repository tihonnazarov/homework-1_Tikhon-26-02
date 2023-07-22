import React from "react";

// lesson 2

import {calculateNewValue} from "@testing-library/user-event/dist/utils";

// class Square extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: null
//         }
//     }
//     render() {
//         return (
//             <button className="square" onClick={() => this.setState( {value: "X"})}>
//                 {this.state.value}
//             </button>
//         )
//     }
// }
//
// class Board extends React.Component {
//     renderSquare(i) {
//         return <Square value={i} />
//     }
//
//     render() {
//         const status = "Next player: X"
//
//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
//
// class Game extends React.Component{
//     render() {
//         return (
//             <div className="Game">
//                 <div className="game-board">
//                     <Board/>
//                 </div>
//                 <div className="game-info">
//                     <div></div>
//                     <ol></ol>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Game

// lesson 3

// function Square(props) {
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     )
// }
//
// class Board extends React.Component {
//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.props.squares[i]}
//                 onClick = {() => this.props.onClick(i)}
//             />
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
//
// class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null)
//             }],
//             xIsNext: true
//         }
//     }
//
//     handleClick(i) {
//         const history = this.state.history;
//         const current = history[history.length - 1]
//         const squares = current.squares.slice()
//
//         if (calculateWinner(squares) || squares[i]) {
//             return
//         }
//
//         squares[i] = this.state.xIsNext ? "X" : "0"
//         this.setState({
//             history: history.concat([{
//                 squares: squares
//             }]),
//             xIsNext: !this.state.xIsNext,
//         })
//     }
//
//     render() {
//         const history = this.state.history;
//         const current = history[history.length - 1]
//         const winner = calculateWinner(current.squares)
//
//         let status
//         if (winner) {
//             status = "Winner:" + winner
//         }else{
//             status = "Next player:" + (this.state.xIsNext ? "X" : "0")
//         }
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current.squares}
//                         onClick={(i) => this.handleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol></ol>
//                 </div>
//             </div>
//         )
//     }
// }
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ]
//     for (let i = 0; i < lines.length; i++ ) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a]
//         }
//     }
//     return null;
// }
//
// export default Game;

// lesson 4

// неконтролируемый компонент
export default class NameForm extends React.Component {
   handleSubmitClick = () => {
       const name = this._name.value
   }
    render() {
        return(
            <div>
                <input type="text" ref={(input) => (this._name = input)} />
                <button onClick={this.handleSubmitClick}>Sign Up!!!</button>
            </div>
        )
    }  
}