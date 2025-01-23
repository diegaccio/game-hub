import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDetails from "../components/GameDetails";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import ScreenshotsGrid from "../components/ScreenshotsGrid";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!); //! tells the compiler that the string cannot be null (it's checked by the router)
  if (isLoading) return <Spinner></Spinner>;

  if (error || !game) throw error;

  return (
    <>
      <Heading marginY={2}>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameDetails game={game} />
      <GameTrailer game={game} />
      <ScreenshotsGrid gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
