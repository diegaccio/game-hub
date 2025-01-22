import { Game } from "../entities/Game";
import useTrailers from "../hooks/useTrailers";

interface GameTrailerProps {
  game: Game;
}

const GameTrailer = ({ game }: GameTrailerProps) => {
  const { data, error } = useTrailers(game.id);

  if (error) return null;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
