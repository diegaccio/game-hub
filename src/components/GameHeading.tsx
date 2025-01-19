import { Heading } from "@chakra-ui/react";
import { GameQueryParams } from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQueryParams: GameQueryParams;
}

const GameHeading = ({ gameQueryParams }: GameHeadingProps) => {
  const { data } = useGenres();

  const selectedGenre = data.results.find(
    (genre) => genre.id === gameQueryParams.genreId
  );

  const { data: platformData } = usePlatforms();

  const selectedPlatform = platformData.results.find(
    (platform) => platform.id === gameQueryParams.platformId
  );

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
