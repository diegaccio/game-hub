import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface ScreenshotsGridProps {
  gameId: number;
}

const ScreenshotsGrid = ({ gameId }: ScreenshotsGridProps) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid marginY={5} columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.image}
        />
      ))}
    </SimpleGrid>
  );
};

export default ScreenshotsGrid;
