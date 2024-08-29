type GameBoardProps = {
  onSelectSquare: (row : number , col : number)=> void;
  board: (string | null)[][];
};

function GameBoard({onSelectSquare , board} : GameBoardProps) {

  return (
    <ol id="game-board">
      {board.map((boardRow, boardRowIndex) => (
        <li key={boardRowIndex}>
          <ol>
            {boardRow.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button onClick={ () => onSelectSquare(boardRowIndex , playerSymbolIndex) } disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
