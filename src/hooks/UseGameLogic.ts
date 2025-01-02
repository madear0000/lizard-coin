import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { plusScore, currentScore, level } from "../store/GameSlice";

export interface GameLogic {
  score: number;
  currentLevel: number;
  levelScore: number;
  incrementScore: () => void;
}

export const useGameLogic = () => {
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.info.score);
  const currentLevel = useSelector((state: RootState) => state.info.level);
  const levelScore = useSelector((state: RootState) => state.info.currentScore);

  const incrementScore = () => {
    dispatch(plusScore());
    dispatch(currentScore());
    dispatch(level());
  };

  return { score, currentLevel, levelScore, incrementScore };
};
