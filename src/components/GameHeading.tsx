import { Heading } from "@chakra-ui/react";
import { GameQueryParams } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface GameHeadingProps {
  gameQueryParams: GameQueryParams;
}

const GameHeading = ({ gameQueryParams }: GameHeadingProps) => {
  const selectedGenre = useGenre(gameQueryParams.genreId);
  const selectedPlatform = usePlatform(gameQueryParams.platformId);

  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
