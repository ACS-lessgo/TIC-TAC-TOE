type GameTurn = {
    square: { row: number; col: number };
    player: string;
};

type LogProps = {
    turns: GameTurn[];
};

function Log( {turns} : LogProps) {
    
  return (
    <ol id='log'>
        {turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li> )}
    </ol>
  )
}

export default Log