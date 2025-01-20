import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import getCroppedImageUrl from "../services/image-url";
import noImagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link to={"game/" + game.slug}>
      <Card>
        <Image
          src={
            game.background_image
              ? getCroppedImageUrl(game.background_image)
              : noImagePlaceholder
          }
        ></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <GameScore score={game.metacritic}></GameScore>
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
