import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames, { GameQueryParams } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchedDataCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedDataCount} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage} //!! provides a default value of false for hasMore when hasNextPage is undefined.
      loader={<Spinner></Spinner>}
      endMessage={
        <Text marginY={5} fontSize="xl">
          Yay! You have seen it all
        </Text>
      }
    >
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
    </InfiniteScroll>
  );
};
export default GameGrid;
