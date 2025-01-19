import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { GameQueryParams } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface GameGridProps {
  queryParams: GameQueryParams;
}

const GameGrid = ({ queryParams }: GameGridProps) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(queryParams);

  const skeletons: number[] = Array.from({ length: 16 }, (_, i) => i);
  //console.log(skeletons); // Output: [0, 1, 2, 3, ..., 15];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data?.pages
          .flatMap((page) => page.results)
          .map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          onClick={() => fetchNextPage()} /* disabled={!hasNextPage} */
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};
export default GameGrid;
