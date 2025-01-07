import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons: number[] = Array.from({ length: 16 }, (_, i) => i);
  //console.log(skeletons); // Output: [0, 1, 2, 3, ..., 15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
