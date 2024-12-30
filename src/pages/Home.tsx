import React, { useState } from "react";
import coinImg from "../assets/coin.png";
import avatarImg from "../assets/frog.png";

function Home(): JSX.Element {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore((a) => a + 1);
  };

  return (
    <div className="game">
      <div className="game-score">
        <img src={coinImg} alt="coin" />
        <p>{score}</p>
      </div>
      <div onClick={handleClick} className="game-person">
        <img className="game-person-image" src={avatarImg} alt="frog" />
      </div>
    </div>
  );
}

export default Home;
