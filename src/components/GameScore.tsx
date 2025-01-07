import { Badge } from "@chakra-ui/react";

interface GameScoreProps {
  score: number;
}

const GameScore = ({ score }: GameScoreProps) => {
  const color: string = score > 85 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge fontSize="md" colorScheme={color} borderRadius="4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default GameScore;
