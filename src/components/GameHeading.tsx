import { Heading } from "@chakra-ui/react";
import { GameQueryParams } from "../hooks/useGames";

interface GameHeadingProps {
  gameQueryParams: GameQueryParams;
}

const GameHeading = ({ gameQueryParams }: GameHeadingProps) => {
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const heading = `${gameQueryParams.platform?.name || ""} ${
    gameQueryParams.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
