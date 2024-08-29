import { useState } from "react";
type Players = {
  X: string;
  O: string;
};

type PlayerProps = {
  playerName: string;
  symbol: keyof Players;
  isActive:boolean;
  onPlayerChange: (symbol: keyof Players, newName: string) => void;
};

function Player({ playerName, symbol, isActive ,onPlayerChange }: PlayerProps) {
  const [initialPlayerName, setPlayerName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if(isEditing){
      onPlayerChange(symbol,initialPlayerName);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  let playerNameField = (
    <span className="player-name">{initialPlayerName}</span>
  );
  if (isEditing) {
    playerNameField = (
      <input
        type="text"
        required
        value={initialPlayerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
