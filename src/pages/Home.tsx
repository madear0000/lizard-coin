import React, { useState } from "react";
import coinImg from "../assets/coin.png";
import fromImg from "../assets/frog.png";
import lizzardImage from "../assets/lizzard.png";
import { useAnimations } from "../hooks/UseAnimations";
import { useGameLogic } from "../hooks/UseGameLogic";
import { levelScores } from "../store/GameSlice";

function Home(): JSX.Element {
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const { score, currentLevel, levelScore, incrementScore } = useGameLogic();
  const { plusOneAnimation, tapAnimation } = useAnimations();
  const avatarImage = score > 25 ? lizzardImage : fromImg;

  const maxScoreForCurrentLevel =
    currentLevel > 0 ? levelScores[currentLevel - 1] : 0;

  const progressPercentage =
    maxScoreForCurrentLevel > 0
      ? (levelScore / maxScoreForCurrentLevel) * 100
      : 0;

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    parentElement: HTMLDivElement,
  ) => {
    plusOneAnimation(event, parentElement);
    tapAnimation(event, setPositionX, setPositionY);
    incrementScore();
  };

  return (
    <div className="game">
      <div className="game-progress-bar">
        <div className="progress-header">
          <span className="text-content">
            {levelScore} / {maxScoreForCurrentLevel}
          </span>
          <span className="text-content">{currentLevel}</span>
        </div>
        <div className="progress-container">
          <div
            className="progress-fill"
            style={{
              width: `${progressPercentage}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="game-score">
        <img src={coinImg} alt="coin" />
        <p>{score}</p>
      </div>

      <div
        onClick={(event) =>
          handleClick(event, event.currentTarget as HTMLDivElement)
        }
        className="game-person"
        style={{
          transform: `rotateX(${positionX}deg) rotateY(${positionY}deg)`,
        }}
      >
        <img className="game-person-image" src={avatarImage} alt="frog" />
      </div>
    </div>
  );
}

export default Home;
