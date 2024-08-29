import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from "./winning-combinations";


const PLAYERS = {
  X :'Player 1',
  O :'Player 2'
}

const initialGameBoard:(string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type GameTurn = {
  square: { row: number; col: number };
  player: string;
};

type Players = {
  X: string;
  O: string;
};

function getActivePlayer(gameTurns : GameTurn[]){
  let currentPlayer = "X";

  if(gameTurns.length>0 && gameTurns[0].player === "X"){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveWinner(gameBoard:(string | null)[][] , players:Players)
{
  let winner = null;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
  
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){ 
      winner = players[firstSquareSymbol as keyof Players];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns:GameTurn[]){
  const gameBoard = initialGameBoard.map((array) => [...array]);

  for(const turn of gameTurns) {
    const {square , player} = turn;
    const {row , col} = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {

  const [players,setPlayers] = useState<Players>({X:'Player 1',O:'Player 2'});
  const [gameTurns,setGameTurns] = useState<GameTurn[]>([]);

  const activePlayer = getActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard,players);

  const hasDraw = gameTurns.length === 9;

  function handleSelectSquare(rowIndex : number,colIndex : number){

    setGameTurns((prevTurns)=>{
      const currentPlayer = getActivePlayer(prevTurns);

      const updatedTurns: GameTurn[] = [
        { square:{row : rowIndex , col : colIndex}, player : currentPlayer},
        ...prevTurns,
      ];

      return updatedTurns;

    })
  }

  function handleRestart(){
    setGameTurns([]);
  };

  function handlePlayerNameChange(symbol : keyof Players, newName : string)
  {
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:newName
      };
    });
  };

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player playerName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onPlayerChange={handlePlayerNameChange}/>
            <Player playerName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onPlayerChange={handlePlayerNameChange}/>
          </ol>
          { (winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
      </main>
    </>
  );
}

export default App;
