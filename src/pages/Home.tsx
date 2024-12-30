import React, { useState } from "react";
import coinImg from "../assets/coin.png";
import avatarImg from "../assets/frog.png";
import { handleClick, animationTap, plusOneCoin } from "../hooks/AnimationHome";

function Home(): JSX.Element {
  const [score, setScore] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  return (
    <div className="game">
      <div className="game-score">
        <img src={coinImg} alt="coin" />
        <p>{score}</p>
      </div>
      <div
        onClick={(event) =>
          handleClick(event, setScore, setPositionX, setPositionY)
        }
        className="game-person"
        style={{
          transform: `rotateX(${positionX}deg) rotateY(${positionY}deg)`,
        }}
      >
        <img className="game-person-image" src={avatarImg} alt="frog" />
      </div>
    </div>
  );
}

export default Home;
