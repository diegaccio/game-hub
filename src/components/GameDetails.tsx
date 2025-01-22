import { SimpleGrid } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import GameScore from "./GameScore";

interface GameDetailsProps {
  game: Game;
}

const GameDetails = ({ game }: GameDetailsProps) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <p key={platform.id}>{platform.name} </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Score">
        <GameScore score={game.metacritic}></GameScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <p key={genre.id}>{genre.name} </p>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <p key={publisher.id}>{publisher.name} </p>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameDetails;
